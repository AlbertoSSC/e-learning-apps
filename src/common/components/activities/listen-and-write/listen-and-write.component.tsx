import React from 'react';

import { Button, List, ListItem } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { ListenAndWriteActivity, useActivitiesContext } from '@/core';

import { SingleAudioComponent } from './components/single-audio.component';
import { compareAnswers } from './listen-and-write.helpers';
import { CheckIconAnimation } from '@/common/utils';
import { useExerciseCompletion } from '../hooks/use-exercise-completion';
import { ActivityProgressHeader } from '../components/activity-progression-header';

import {
  activityContainer,
  activityContent,
  activityHeader,
  repeatAndCorrectButtons,
  repeatingButton,
} from '@/styles';
import * as innerClasses from './listen-and-write.styles';

interface Props {
  activity: ListenAndWriteActivity;
  activityIndex: number;
}

export const ListenAndWriteComponent: React.FC<Props> = props => {
  const { activity, activityIndex } = props;

  const totalExercises = activity.audioList.length;

  const { isCompletedActivitiesContext, setIsCompletedActivitiesContext } =
    useActivitiesContext();

  const { totalExercisesCompleted, setIsCompletedExercise } =
    useExerciseCompletion(
      totalExercises,
      activityIndex,
      isCompletedActivitiesContext,
      setIsCompletedActivitiesContext
    );

  const [inputValues, setInputValues] = React.useState<string[]>(
    new Array(activity.audioList.length).fill('')
  );
  const [isCorrectAnswer, setIsCorrectAnswer] = React.useState<
    (boolean | null)[]
  >([]);

  const handleValidate = () => {
    const newCorrection = activity.audioList.map((audio, index) => {
      const userInput = inputValues[index];
      const correctAnswers = audio.correctAnswers;

      return compareAnswers(userInput, correctAnswers);
    });

    setIsCorrectAnswer(newCorrection);
  };

  const handleResetInputs = () => {
    setInputValues(new Array(activity.audioList.length).fill(''));
    setIsCorrectAnswer(new Array(activity.audioList.length).fill(null));
  };

  React.useEffect(() => {
    setIsCompletedExercise(isCorrectAnswer);
  }, [isCorrectAnswer]);

  return (
    <article css={activityContainer}>
      <header css={activityHeader}>
        <ActivityProgressHeader
          title="Escuchar y escribir"
          subtitle="Rellena con lo que dicen los audios"
          totalExercises={totalExercises}
          completed={totalExercisesCompleted}
        />
      </header>

      <main css={[activityContent, innerClasses.inputsContainer]}>
        <List component="ol">
          {activity.audioList.map((audio, index) => (
            <React.Fragment key={audio.id}>
              <ListItem>
                {isCorrectAnswer[index] === true && (
                  <CheckIconAnimation
                    customStyles={innerClasses.checkIconCustomStyle}
                  />
                )}
                <SingleAudioComponent
                  index={index}
                  audioUrl={audio.audioUrl}
                  correctAnswers={audio.correctAnswers}
                  isCorrectAnswer={isCorrectAnswer[index]}
                  inputValues={inputValues}
                  setInputValues={setInputValues}
                />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </main>

      <footer css={repeatAndCorrectButtons}>
        <Button
          variant="contained"
          css={repeatingButton}
          startIcon={<LoopIcon />}
          onClick={handleResetInputs}
        >
          Repetir
        </Button>
        <Button variant="contained" onClick={handleValidate}>
          Corregir
        </Button>
      </footer>
    </article>
  );
};
