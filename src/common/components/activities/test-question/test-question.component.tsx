import React from 'react';

import { Button } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { TestQuestionActivity } from '@/core';
import { Question } from './question';

import {
  activityContainer,
  activityContent,
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
  const [values, setValues] = React.useState<string[]>(
    new Array(activity.sentenceList.length).fill('')
  );

  const [answersCorrection, setAnswersCorrection] = React.useState<
    (boolean | undefined)[]
  >(new Array(activity.sentenceList.length).fill(undefined));

  const [helpertext, setHelpertext] = React.useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
    setAnswersCorrection(prev => [...prev, (prev[index] = undefined)]);
  };

  const handleValidation = () => {
    const newAnswerCorretion = values.map((value, index) => {
      const correctAnswer = activity.sentenceList[index].correctAnswer;
      return correctAnswer === value;
    });
    setAnswersCorrection(newAnswerCorretion);
    setHelpertext(true);
  };

  const handleReset = () => {
    setValues(new Array(activity.sentenceList.length).fill(''));
    setAnswersCorrection(
      new Array(activity.sentenceList.length).fill(undefined)
    );
    setHelpertext(false);
  };

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
