import React from 'react';

import { SerializedStyles } from '@emotion/react';
import { Pagination } from '@mui/material';

import { PushToSpeakActivity } from '@/core';
import CardComponent from './card';
import { SpeechRecognition, voiceRecognition } from './push-to-speak.helper';

import * as innerClasses from './push-to-speak.styles';
import { activityContainer, paginationStyle } from '@/styles/activity.style';

interface PushToSpeak {
  activity: PushToSpeakActivity;
}

export const PushToSpeakComponent: React.FC<PushToSpeak> = ({ activity }) => {
  const [currentCard, setCurrentCard] = React.useState(0);
  const [spokenText, setSpokenText] = React.useState('');
  const [isListening, setIsListening] = React.useState<boolean>(false);
  const [animationClass, setAnimationClass] =
    React.useState<SerializedStyles>();

  const recognitionRef = React.useRef<SpeechRecognition | null>(null);

  const words = activity.textList.map(text => text.toLowerCase());

  const handleSpeak = () => {
    voiceRecognition(
      recognitionRef,
      setIsListening,
      setSpokenText,
      currentCard,
      activity,
      words
    );
  };

  const handleStopClick = () => {
    if (recognitionRef.current) {
      recognitionRef.current.stop();
      setIsListening(false);
      recognitionRef.current = null;
    }
  };

  const handlePageChange = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setAnimationClass(innerClasses.cardExit);
    setSpokenText('');

    setTimeout(() => {
      setCurrentCard(value - 1);
      setAnimationClass(innerClasses.cardEnter);
    }, 200);
  };

  const imageList = activity.imageList;

  return (
    <div
      id="activity-container"
      css={[activityContainer, innerClasses.fixedHeight]}
    >
      {activity.textList.map(
        (text, index) =>
          index === currentCard && (
            <CardComponent
              key={`${activity.activityId}-card-${index}`}
              imageUrl={
                imageList && imageList.length >= 1 ? imageList[index].url : ''
              }
              text={text}
              handleSpeak={handleSpeak}
              isListening={isListening}
              handleStopClick={handleStopClick}
              spokenText={spokenText}
              animationClass={animationClass}
            />
          )
      )}

      <Pagination
        css={paginationStyle}
        siblingCount={0}
        count={activity.textList.length}
        page={currentCard + 1}
        onChange={handlePageChange}
        color="primary"
      />
    </div>
  );
};
