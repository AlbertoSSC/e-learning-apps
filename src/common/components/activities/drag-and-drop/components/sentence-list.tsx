import React from 'react';
import { List, ListItem } from '@mui/material';
import { SentenceToDrop } from './sentence-to-drop';
import { CheckIconAnimation } from '@/common';
import * as innerClasses from '../drag-drop.styles';

interface Props {
  sentences: string[];
  validated: (boolean | null)[];
  droppedItems: (string | null)[];
}

export const SentenceListComponent: React.FC<Props> = ({
  sentences,
  validated,
  droppedItems,
}) => {
  return (
    <List component="ol">
      {sentences.map((sentence, index) => (
        <ListItem
          component="li"
          key={`sentence-container-${index}`}
          css={innerClasses.listItem}
        >
          {validated[index] === true && (
            <CheckIconAnimation
              customStyles={innerClasses.customCheckIconStyles}
            />
          )}
          <SentenceToDrop
            index={index}
            sentence={sentence}
            validated={validated[index]}
            droppedItems={droppedItems}
          />
        </ListItem>
      ))}
    </List>
  );
};
