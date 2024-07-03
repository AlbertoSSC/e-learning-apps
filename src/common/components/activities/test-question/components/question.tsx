import React from 'react';

import {
  FormControl,
  FormControlLabel,
  FormHelperText,
  FormLabel,
  Radio,
  RadioGroup,
} from '@mui/material';

import { TestQuestions } from '@/core';

import * as innerClasses from '../test-question.styles';

interface Props {
  sentence: TestQuestions;
  index: number;
  formErrorStyle: (index: number) => boolean;
  values: string[];
  handleChange: (
    event: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => void;
  helpertext: boolean;
  correctionColorStyle: (index: number) => string;
}

export const Question: React.FC<Props> = props => {
  const {
    sentence,
    index,
    formErrorStyle,
    values,
    handleChange,
    helpertext,
    correctionColorStyle,
  } = props;

  return (
    <div id="question-container" css={innerClasses.questionContainer}>
      <FormControl error={formErrorStyle(index)} fullWidth>
        <FormLabel id={`sentence-${index}`} css={innerClasses.labelStyles}>
          {sentence.sentence}
        </FormLabel>

        <RadioGroup
          id="answers"
          aria-label="answers"
          name="answers"
          value={values[index]}
          onChange={e => handleChange(e, index)}
        >
          {sentence.options.map((option, optionIndex) => (
            <FormControlLabel
              id={`question-option-${optionIndex}`}
              key={option}
              value={option}
              control={<Radio />}
              label={option}
              css={innerClasses.option(correctionColorStyle(index))}
            />
          ))}
          {helpertext && (
            <FormHelperText>Respuesta: {sentence.correctAnswer}</FormHelperText>
          )}
        </RadioGroup>
      </FormControl>
    </div>
  );
};
