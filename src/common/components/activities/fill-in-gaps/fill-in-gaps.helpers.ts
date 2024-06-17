import { normalizeString } from '@/common';
import { FillInGapSentence } from './fill-in-gaps.vm';

export const rowValidator = (
  item: FillInGapSentence,
  inputsValues: string[]
) => {
  const gapOptions = item.gaps.map(gap =>
    gap.options.map(option => normalizeString(option))
  );

  const inputsValuesNormalized = inputsValues.map(input =>
    normalizeString(input)
  );

  const isValidGapAnswer = gapOptions.map((gap, index) =>
    gap.includes(inputsValuesNormalized[index])
  );

  return isValidGapAnswer;
};
