import React from 'react';

import { TextField } from '@mui/material';

interface Props {
  inputIndex: number;
  correctAnswers: string[];
  isCorrectAnswer: boolean | undefined;
  inputValues: string[];
  setInputValues: React.Dispatch<React.SetStateAction<string[]>>;
}

export const UserTextInput: React.FC<Props> = props => {
  const {
    inputIndex,
    correctAnswers,
    isCorrectAnswer,
    inputValues,
    setInputValues,
  } = props;

  const isCorrectSpanStyle =
    isCorrectAnswer === true || isCorrectAnswer === false;

  const handleNewInput = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputValues(prev => {
      const newValue = [...prev];
      newValue[inputIndex] = e.target.value;
      return newValue;
    });
  };

  return (
    <TextField
      focused
      autoComplete="off"
      aria-label={`text input ${inputIndex}`}
      variant="filled"
      type="text"
      id={`userInput${inputIndex}`}
      value={inputValues[inputIndex]}
      onChange={handleNewInput}
      color={isCorrectAnswer === true ? 'success' : 'primary'}
      error={isCorrectAnswer === false}
      helperText={isCorrectSpanStyle ? `Respuesta: ${correctAnswers[0]}` : ''}
    />
  );
};
