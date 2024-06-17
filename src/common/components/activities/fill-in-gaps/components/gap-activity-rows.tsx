import React from 'react';

import { TextField, Typography } from '@mui/material';

import { FillInGapSentence } from '@/core';
import * as innerClasses from '../fill-in-gaps.sytles';

interface Props {
  item: FillInGapSentence;
  sentenceIndex: number;
  isCorrectAnswers: boolean[][];
  inputsValues: string[][];
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
    <div id={`activity-row-${item.id}`} css={innerClasses.activityRow}>
      {item.sentence.split('___').map((textPiece, index) => (
        <React.Fragment key={`textPiece-${index}`}>
          <Typography color="text.primary">{textPiece}</Typography>

          {index < item.gaps.length && (
            <TextField
              css={innerClasses.inputWidth}
              hiddenLabel
              size="small"
              focused
              autoComplete="off"
              variant="filled"
              type="text"
              id={`gap-input-${item.id}`}
              value={inputsValues[sentenceIndex][index] || ''}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => {
                setInputsValues(prev => {
                  const newValue = [...prev];
                  newValue[sentenceIndex][index] = e.target.value;
                  return newValue;
                });
              }}
              color={
                isCorrectAnswers[sentenceIndex] &&
                isCorrectAnswers[sentenceIndex][index] === true
                  ? 'success'
                  : 'primary'
              }
              error={
                isCorrectAnswers[sentenceIndex] &&
                isCorrectAnswers[sentenceIndex][index] === false
              }
              helperText={
                isCorrectAnswers[sentenceIndex] &&
                (isCorrectAnswers[sentenceIndex][index] === true ||
                  isCorrectAnswers[sentenceIndex][index] === false)
                  ? `Respuesta: ${item.gaps[index]?.options[0]}`
                  : ''
              }
            />
          )}
        </React.Fragment>
      ))}
    </div>
  );
};
