import { normalizeString } from '@/common';
import { FillInGapSentence } from '@/core';

export const validateGapsInput = (
  gapsData: FillInGapSentence[],
  inputsValues: string[][]
) => {
  return gapsData.map((item, sentenceIndex) => {
    const gapOptions = item.gaps.map(gap =>
      gap.options.map(option => normalizeString(option))
    );

    const inputsValuesNormalized = inputsValues[sentenceIndex].map(input =>
      normalizeString(input)
    );

    const isValidGapAnswer = gapOptions.map((gap, index) =>
      gap.includes(inputsValuesNormalized[index])
    );

    return isValidGapAnswer;
  });
};
