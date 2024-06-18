import React from 'react';

import { Button } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { TestQuestionActivity } from '@/core';
import { Question } from './components/question';
import { useTestQuestionState } from './hooks/use-test-question';

import {
  activityContainer,
  activityContent,
  activityContentSlider,
  correctionButton,
  repeatAndCorrectButtons,
} from '@/styles/activity.style';
import * as innerClasses from './test-question.styles';

export interface TestQuestionComponentProps {
  activity: TestQuestionActivity;
}

export const TestQuestionComponent: React.FC<TestQuestionComponentProps> = ({
  activity,
}) => {
  const {
    values,
    answersCorrection,
    helpertext,
    handleChange,
    handleValidation,
    handleReset,
  } = useTestQuestionState(activity);

  const correctionColorStyle = (index: number): string => {
    if (answersCorrection[index] === true) return 'green';
    if (answersCorrection[index] === false) return 'crimson';
    return '#1976d2';
  };

  const formErrorStyle = (index: number): boolean => {
    if (answersCorrection[index] === true) return false;
    if (answersCorrection[index] === false) return true;
    return false;
  };

  return (
    <article css={activityContainer}>
      <section css={[activityContent, innerClasses.testContainer]}>
        {activity.sentenceList.map((sentence, index) => (
          <Question
            key={`test-sentence-${index}`}
            sentence={sentence}
            index={index}
            formErrorStyle={formErrorStyle}
            values={values}
            handleChange={handleChange}
            helpertext={helpertext}
            correctionColorStyle={correctionColorStyle}
          />
        ))}
      </section>

      <section css={repeatAndCorrectButtons}>
        <Button
          variant="contained"
          startIcon={<LoopIcon />}
          onClick={handleReset}
        >
          Repetir
        </Button>
        <Button
          variant="contained"
          css={correctionButton}
          onClick={handleValidation}
        >
          Corregir
        </Button>
      </section>
    </article>
  );
};
