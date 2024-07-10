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
  activityComponent,
  activityContainer,
  activityContent,
  activityHeader,
  activityIcon,
  iconBG,
  buttonsContainer,
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
    <article css={activityComponent}>
      <section css={activityIcon}>
        <div css={iconBG}></div>
        <img
          src="/assets/images/activities_icons/listening-Writing.png"
          alt="  of a writing hand and an ear"
          css={innerClasses.activityIconStyles}
        />
      </section>

      <section css={activityContainer}>
        <header css={[activityHeader, innerClasses.headerStyles]}>
          <ActivityProgressHeader
            title="Escuchar y escribir"
            subtitle="Reproduce los audios y completa los campos con el texto correspondiente."
            totalExercises={totalExercises}
            completed={totalExercisesCompleted}
          />
        </header>

        <main css={activityContent}>
          <List component="ol">
            {activity.audioList.map((audio, index) => (
              <React.Fragment key={audio.id}>
                <ListItem css={innerClasses.liStyles}>
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

        <footer css={buttonsContainer}>
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
      </section>
    </article>
  );
};
