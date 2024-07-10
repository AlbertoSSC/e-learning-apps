import React from 'react';

import { Pagination } from '@mui/material';

import { PushToSpeakActivity, useActivitiesContext } from '@/core';
import CardComponent from './components/card';
import { SpeechRecognition, voiceRecognition } from './push-to-speak.helper';
import { ActivityProgressHeader } from '../components/activity-progression-header';
import { useExerciseCompletion } from '../hooks/use-exercise-completion';

import {
  activityContainer,
  activityContent,
  paginationStyle,
  activityContentCardSlider,
  cardStyle,
  footerWidth,
  activityHeader,
  activityComponent,
  activityIcon,
  iconBG,
} from '@/styles';

interface PushToSpeak {
  activity: PushToSpeakActivity;
  activityIndex: number;
}

export const PushToSpeakComponent: React.FC<PushToSpeak> = props => {
  const { activity, activityIndex } = props;

  const [currentCard, setCurrentCard] = React.useState(0);

  const [spokenText, setSpokenText] = React.useState('');
  const [isListening, setIsListening] = React.useState<boolean>(false);

  const [isCorrectSpeaking, setIsCorrectSpeaking] = React.useState<boolean[]>(
    new Array(activity.textList.length).fill(false)
  );

  const words = activity.textList.map(text => text.toLowerCase());
  const imageList = activity.imageList;

  const totalExercises = activity.textList.length;

  const { isCompletedActivitiesContext, setIsCompletedActivitiesContext } =
    useActivitiesContext();

  const { totalExercisesCompleted, setIsCompletedExercise } =
    useExerciseCompletion(
      totalExercises,
      activityIndex,
      isCompletedActivitiesContext,
      setIsCompletedActivitiesContext
    );

  const recognitionRef = React.useRef<SpeechRecognition | null>(null);

  const handleSpeak = () => {
    voiceRecognition(
      recognitionRef,
      setIsListening,
      setSpokenText,
      setIsCorrectSpeaking,
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
    setSpokenText('');
    setCurrentCard(value - 1);
  };

  React.useEffect(() => {
    setIsCompletedExercise(isCorrectSpeaking);
  }, [isCorrectSpeaking]);

  return (
    <article css={activityComponent}>
      <section css={activityIcon}>
        <div css={iconBG}></div>
        <img
          src="/assets/images/activities_icons/mouth-Speaking.png"
          alt="  of a mouth"
        />
      </section>

      <section css={activityContainer}>
        <header css={activityHeader}>
          <ActivityProgressHeader
            title="Hablar"
            subtitle="Practica la pronunciación"
            totalExercises={totalExercises}
            completed={totalExercisesCompleted}
          />
        </header>

        <main css={[activityContent, activityContentCardSlider(currentCard)]}>
          {activity.textList.map((text, index) => (
            <CardComponent
              key={`${activity.activityId}-card-${index}`}
              imageUrl={
                imageList && imageList.length >= 1 ? imageList[index].url : ''
              }
              text={text}
              altText={
                imageList && imageList.length >= 1 ? imageList[index].name : ''
              }
              handleSpeak={handleSpeak}
              isListening={isListening}
              handleStopClick={handleStopClick}
              spokenText={spokenText}
              animationclass={cardStyle(index === currentCard)}
            />
          ))}
        </main>

        {activity.textList.length > 1 && (
          <footer css={footerWidth}>
            <Pagination
              css={paginationStyle}
              siblingCount={0}
              count={activity.textList.length}
              page={currentCard + 1}
              onChange={handlePageChange}
            />
          </footer>
        )}
      </section>
    </article>
  );
};
