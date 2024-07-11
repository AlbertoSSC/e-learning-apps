import React from 'react';

import { TextField } from '@mui/material';

interface Props {
  inputIndex: number;
  correctAnswers: string[];
  isCorrectAnswer: boolean | null;
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
      id={`userInput${inputIndex}`}
      label={`userInput${inputIndex}`}
      focused
      hiddenLabel
      size="small"
      autoComplete="off"
      aria-label={`text input ${inputIndex}`}
      variant="filled"
      type="text"
      value={inputValues[inputIndex]}
      onChange={handleNewInput}
      error={isCorrectAnswer === false}
      helperText={isCorrectSpanStyle ? `${correctAnswers[0]}` : ''}
      sx={{
        '& .MuiFormHelperText-root': {
          color: isCorrectAnswer === false ? 'error' : 'primary',
        },
        '&.MuiFormControl-root': {
          '& .MuiInputLabel-root': {
            color: 'transparent',
          },
        },
      }}
    />
  );
};
