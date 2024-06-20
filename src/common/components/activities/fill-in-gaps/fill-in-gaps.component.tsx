import React from 'react';

import { Button, List, ListItem, ListItemText } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { FillInGapActivity } from '@/core';
import { GapActivityRow } from './components/gap-activity-rows';
import { useGapsFillState } from './hooks/use-gaps-fill-state';

import {
  activityContainer,
  activityContent,
  correctionButton,
  listNumbers,
  repeatAndCorrectButtons,
} from '@/styles';
import { innerClasses, listItem } from './fill-in-gaps.styles';

interface Props {
  activity: FillInGapActivity;
}

export const FillInGapsComponent: React.FC<Props> = ({ activity }) => {
  const {
    gapsData,
    inputsValues,
    isCorrectAnswers,
    setInputsValues,
    handleReset,
    handleValidate,
  } = useGapsFillState(activity);

  return (
    <article css={activityContainer}>
      <section css={activityContent}>
        <List component="ol" css={innerClasses.sentenceContainer}>
          {gapsData.map((item, sentenceIndex) => (
            <ListItem key={sentenceIndex} css={listItem}>
              <ListItemText
                primary={`${sentenceIndex + 1}.`}
                css={[listItem, listNumbers]}
              />
              <GapActivityRow
                item={item}
                inputsValues={inputsValues[sentenceIndex]}
                isCorrectAnswers={isCorrectAnswers[sentenceIndex]}
                setInputsValues={setInputsValues}
                sentenceIndex={sentenceIndex}
              />
            </ListItem>
          ))}
        </List>
      </section>

      <section css={repeatAndCorrectButtons}>
        <Button
          variant="contained"
          startIcon={<LoopIcon />}
          onClick={handleReset}
        >
          Repetir
        </Button>
        <Button
          variant="contained"
          css={correctionButton}
          onClick={handleValidate}
        >
          Corregir
        </Button>
      </section>
    </article>
  );
};
