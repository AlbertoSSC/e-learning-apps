import React from 'react';

import { Button, List, ListItem } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { TestQuestionActivity, useActivitiesContext } from '@/core';
import { Question } from './components/question';
import { useTestQuestionState } from './hooks/use-test-question';
import { useExerciseCompletion } from '../hooks/use-exercise-completion';
import { ActivityProgressHeader } from '../components/activity-progression-header';
import { CheckIconAnimation } from '@/common/utils';

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
import theme from '@/styles/themes/customMUI.theme';
import * as innerClasses from './test-question.styles';

export interface Props {
  activity: TestQuestionActivity;
  activityIndex: number;
}

export const TestQuestionComponent: React.FC<Props> = props => {
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
    values,
    answersCorrection,
    helpertext,
    handleChange,
    handleValidation,
    handleReset,
  } = useTestQuestionState(activity);

  const correctionColorStyle = (index: number): string =>
    answersCorrection[index] === false
      ? theme.palette.error.main
      : theme.palette.primary.main;

  const formErrorStyle = (index: number): boolean =>
    answersCorrection[index] === false ? true : false;

  React.useEffect(() => {
    setIsCompletedExercise(answersCorrection);
  }, [answersCorrection]);

  return (
    <article css={activityComponent}>
      <section css={activityIcon}>
        <div css={iconBG}></div>
        <img
          src="/assets/images/activities_icons/test-Check.png"
          alt="  of a check icon"
          css={innerClasses.activityIconStyles}
        />
      </section>

      <section css={activityContainer}>
        <header css={activityHeader}>
          <ActivityProgressHeader
            title="Test"
            subtitle="Responde correctamente"
            totalExercises={totalExercises}
            completed={totalExercisesCompleted}
          />
        </header>

        <main css={[activityContent, innerClasses.testContainer]}>
          <List>
            {activity.sentenceList.map((sentence, index) => (
              <ListItem
                key={`test-sentence-${index}`}
                css={innerClasses.liStyles}
              >
                {answersCorrection[index] === true && (
                  <CheckIconAnimation
                    customStyles={innerClasses.checkIconCustomStyle}
                  />
                )}
                <Question
                  sentence={sentence}
                  index={index}
                  formErrorStyle={formErrorStyle}
                  values={values}
                  handleChange={handleChange}
                  helpertext={helpertext}
                  correctionColorStyle={correctionColorStyle}
                />
              </ListItem>
            ))}
          </List>
        </main>

        <footer css={buttonsContainer}>
          <Button
            variant="contained"
            css={repeatingButton}
            startIcon={<LoopIcon />}
            onClick={handleReset}
          >
            Repetir
          </Button>
          <Button variant="contained" onClick={handleValidation}>
            Corregir
          </Button>
        </footer>
      </section>
    </article>
  );
};
