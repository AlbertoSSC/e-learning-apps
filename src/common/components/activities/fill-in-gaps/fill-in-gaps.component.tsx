import React from 'react';

import { Button, List, ListItem, ListItemText } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { FillInGapActivity, useActivitiesContext } from '@/core';
import { CheckIconAnimation } from '@/common';
import { GapActivityRow } from './components/gap-activity-rows';
import { useGapsFillState } from './hooks/use-gaps-fill-state';
import { ActivityProgressHeader } from '../components/activity-progression-header';
import { useExerciseCompletion } from '../hooks/use-exercise-completion';

import {
  activityContainer,
  activityContent,
  activityHeader,
  listNumbers,
  repeatAndCorrectButtons,
  repeatingButton,
} from '@/styles';
import * as innerClasses from './fill-in-gaps.styles';

interface Props {
  activity: FillInGapActivity;
  activityIndex: number;
}

export const FillInGapsComponent: React.FC<Props> = props => {
  const { activity, activityIndex } = props;

  const totalExercises = activity.sentenceList.length;

  const { isCompletedActivitiesContext, setIsCompletedActivitiesContext } =
    useActivitiesContext();

  const { totalExercisesCompleted, setIsCompletedExercise } =
    useExerciseCompletion(
      totalExercises,
      activityIndex,
      isCompletedActivitiesContext,
      setIsCompletedActivitiesContext
    );

  const {
    gapsData,
    inputsValues,
    isCorrectAnswers,
    setInputsValues,
    handleReset,
    handleValidate,
  } = useGapsFillState(activity);

  React.useEffect(() => {
    const isCorrectExercise = isCorrectAnswers.map(item =>
      item.every(answer => answer === true)
    );

    setIsCompletedExercise(isCorrectExercise);
  }, [isCorrectAnswers]);

  return (
    <article css={activityContainer}>
      <header css={activityHeader}>
        <ActivityProgressHeader
          title="Escribir"
          subtitle="Completa las oraciones"
          totalExercises={totalExercises}
          completed={totalExercisesCompleted}
        />
      </header>

      <main css={activityContent}>
        <List component="ol" css={innerClasses.sentenceContainer}>
          {gapsData.map((item, sentenceIndex) => (
            <ListItem key={sentenceIndex} css={innerClasses.listItem}>
              <ListItemText
                primary={`${sentenceIndex + 1}.`}
                css={[innerClasses.listItem, listNumbers]}
              />
              {isCorrectAnswers[sentenceIndex]?.every(
                answer => answer === true
              ) && (
                <CheckIconAnimation
                  customStyles={innerClasses.checkIconCustomStyle}
                />
              )}
              <GapActivityRow
                item={item}
                inputsValues={inputsValues[sentenceIndex]}
                isCorrectAnswers={isCorrectAnswers[sentenceIndex]}
                setInputsValues={setInputsValues}
                sentenceIndex={sentenceIndex}
              />
            </ListItem>
          ))}
        </List>
      </main>

      <footer css={repeatAndCorrectButtons}>
        <Button
          variant="contained"
          css={repeatingButton}
          startIcon={<LoopIcon />}
          onClick={handleReset}
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
