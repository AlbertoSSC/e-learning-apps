import React from 'react';

import { TestQuestionActivity } from '@/core';

export const useTestQuestionState = (activity: TestQuestionActivity) => {
  const [values, setValues] = React.useState<string[]>(
    new Array(activity.sentenceList.length).fill('')
  );

  const [answersCorrection, setAnswersCorrection] = React.useState<
    (boolean | null)[]
  >(new Array(activity.sentenceList.length).fill(null));

  const [helpertext, setHelpertext] = React.useState(false);

  const handleChange = (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const newValues = [...values];
    newValues[index] = event.target.value;
    setValues(newValues);
    setAnswersCorrection(prev => [...prev, (prev[index] = null)]);
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
    setAnswersCorrection(new Array(activity.sentenceList.length).fill(null));
    setHelpertext(false);
  };

  return {
    values,
    answersCorrection,
    helpertext,
    handleChange,
    handleValidation,
    handleReset,
  };
};
