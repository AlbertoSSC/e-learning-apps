import { normalizeString } from '@/common';

export const compareAnswers = (
  userInput: string,
  correctAnswers: string[]
): boolean => {
  const normalizedUserInput = normalizeString(userInput);

  return correctAnswers.some(
    correctAnswer => normalizeString(correctAnswer) === normalizedUserInput
  );
};
