import React from 'react';

import { Typography } from '@mui/material';

import { Droppable } from './droppable';

import * as innerClasses from '../drag-drop.styles';

interface Props {
  index: number;
  sentence: string;
  validated: number | null;
  droppedItems: (string | null)[];
}

export const SentenceToDrop: React.FC<Props> = ({
  index,
  sentence,
  validated,
  droppedItems,
}) => {
  const droppedItem = droppedItems[index];

  return (
    <div id={`sentence-text-${index}`} css={innerClasses.sentenceText}>
      <Typography variant="h6">{sentence}</Typography>
      <Droppable
        key={`droppable-${index}`}
        id={`droppable-${index}`}
        validated={validated}
        index={index}
      >
        {droppedItem ? (
          <div css={innerClasses.droppedItem}>{droppedItem}</div>
        ) : null}
      </Droppable>
    </div>
  );
};
