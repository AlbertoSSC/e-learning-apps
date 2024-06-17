import React from 'react';

import { FillInGapActivity, FillInGapSentence } from '@/core';
import { validateGapsInput } from '../fill-in-gaps.helpers';

export const useGapsFillState = (activity: FillInGapActivity) => {
  const [gapsData, setGapsData] = React.useState<FillInGapSentence[]>(
    activity.sentenceList.map(sentence => ({
      ...sentence,
    }))
  );
  const [inputsValues, setInputsValues] = React.useState<string[][]>(
    activity.sentenceList.map(sentence =>
      new Array(sentence.gaps.length).fill('')
    )
  );
  const [isCorrectAnswers, setIsCorrectAnswers] = React.useState<boolean[][]>(
    []
  );

  React.useEffect(() => {
    const fillInGapsData = activity.sentenceList;
    setGapsData(fillInGapsData);
    setInputsValues(
      fillInGapsData.map(sentence => new Array(sentence.gaps.length).fill(''))
    );
  }, [activity.sentenceList]);

  const handleReset = () => {
    setInputsValues(
      gapsData.map(sentence => new Array(sentence.gaps.length).fill(''))
    );
    setIsCorrectAnswers([]);
  };

  const handleValidate = () => {
    const validationResults = validateGapsInput(gapsData, inputsValues);
    setIsCorrectAnswers(validationResults);
  };

  return {
    gapsData,
    inputsValues,
    isCorrectAnswers,
    setInputsValues,
    handleReset,
    handleValidate,
  };
};
