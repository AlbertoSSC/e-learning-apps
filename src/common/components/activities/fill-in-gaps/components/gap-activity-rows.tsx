import React from 'react';

import { TextField, Typography } from '@mui/material';

import { FillInGapSentence } from '@/core';
import * as innerClasses from '../fill-in-gaps.styles';

interface Props {
  item: FillInGapSentence;
  sentenceIndex: number;
  isCorrectAnswers: boolean[];
  inputsValues: string[];
  setInputsValues: React.Dispatch<React.SetStateAction<string[][]>>;
}

export const GapActivityRow: React.FC<Props> = ({
  item,
  sentenceIndex,
  isCorrectAnswers,
  inputsValues,
  setInputsValues,
}) => {
  return (
    <div id={`activity-row-${item.id}`}>
      {item.sentence.split('___').map((textPiece, index) => (
        <React.Fragment key={`textPiece-${index}`}>
          <Typography component="span">{textPiece}</Typography>

          {index < item.gaps.length && (
            <TextField
              css={innerClasses.inputWidth}
              id={`gap-input-${item.id}-${index}`}
              label={`gap-input-${item.id}-${index}`}
              hiddenLabel
              size="small"
              focused
              autoComplete="off"
              variant="filled"
              type="text"
              value={inputsValues[index] || ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputsValues(prev => {
                  const newValue = [...prev];
                  newValue[sentenceIndex][index] = e.target.value;
                  return newValue;
                });
              }}
              error={isCorrectAnswers && isCorrectAnswers[index] === false}
              helperText={
                isCorrectAnswers &&
                (isCorrectAnswers[index] === true ||
                  isCorrectAnswers[index] === false)
                  ? `${item.gaps[index]?.options[0]}`
                  : ''
              }
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
