/* eslint-disable @typescript-eslint/no-explicit-any */
import { MutableRefObject, Dispatch, SetStateAction } from 'react';

import { PushToSpeakActivity } from '@/core';
import { normalizeString } from '@/common/helpers';

export interface SpeechRecognitionEvent extends Event {
  results: SpeechRecognitionResultList;
}

type SpeechGrammarList = {
  addFromString: (grammar: string, weight?: number) => void;
  addFromURI: (src: string, weight?: number) => void;
};

export interface SpeechRecognition {
  start(): void;
  stop(): void;
  onresult: (event: SpeechRecognitionEvent) => void;
  onerror: (event: SpeechRecognitionEvent) => void;
  lang: string;
  grammars: SpeechGrammarList;
}

export const voiceRecognition = (
  recognitionRef: MutableRefObject<SpeechRecognition | null>,
  setIsListening: Dispatch<SetStateAction<boolean>>,
  setSpokenText: Dispatch<SetStateAction<string>>,
  currentCard: number,
  activity: PushToSpeakActivity,
  words: string[]
) => {
  const recognition = new ((window as any).SpeechRecognition ||
    (window as any).webkitSpeechRecognition)();

  const createGrammar = (words: string[]): string => {
    const grammar = `#JSGF V1.0; grammar words; public <word> = ${words.join(
      ' | '
    )} ;`;
    return grammar;
  };

  const speechRecognitionList = new ((window as any).SpeechGrammarList ||
    (window as any).webkitSpeechGrammarList)();

  const grammar = createGrammar(words);
  speechRecognitionList.addFromString(grammar, 1);

  recognition.grammars = speechRecognitionList;
  recognition.lang = 'es-ES';
  recognition.interimResults = false;
  recognition.maxAlternatives = 0;
  recognitionRef.current = recognition;

  const stopRecognition = () => {
    recognitionRef.current = null;
    setIsListening(false);
  };

  recognition.onstart = () => {
    setIsListening(true);
  };


  recognition.onresult = (event: SpeechRecognitionEvent) => {
    const getSpokenText = event.results[0][0].transcript;
    const normalizedSpokenText = normalizeString(getSpokenText);

    const expectedText = activity.textList[currentCard];
    const normalizedExpectedText = normalizeString(expectedText);

    if (normalizedSpokenText === normalizedExpectedText) {
      setSpokenText('¡Correcto!');
    } else {
      setSpokenText(
        `Inténtalo de nuevo.
         Parece que has dicho: "${getSpokenText}"`
      );
    }

    stopRecognition();
  };

  recognition.onend = () => {
    stopRecognition();
  };

  recognition.onerror = (event: SpeechRecognitionEvent) => {
    console.error('Speech Recognition Error:', event);
    setSpokenText('Error recognizing voice. Check your mic.');

    stopRecognition();
  };

  recognition.start();
};
