import React from 'react';

import { List, ListItem } from '@mui/material';

import { SenteceToDrop } from './sentence-to-drop';
import { CheckIconAnimation } from '@/common';

import * as innerClasses from '../drag-drop.styles';

interface Props {
  sentences: string[];
  activeBoxIndex: number;
  droppedItems: (string | null)[];
  validated: (number | null)[];
  handleDragLeave: () => void;
  handleDragOver: (e: React.DragEvent<HTMLDivElement>, index: number) => void;
  handleDrop: (index: number) => void;
}
export const SentenceListComponent: React.FC<Props> = props => {
  const {
    sentences,
    activeBoxIndex,
    droppedItems,
    validated,
    handleDragLeave,
    handleDragOver,
    handleDrop,
  } = props;

  return (
    <List component="ol">
      {sentences.map((sentence, index) => (
        <ListItem
          component="li"
          key={`sentence-container-${index}`}
          css={innerClasses.listItem}
        >
          {validated[index] === index && (
            <CheckIconAnimation
              customStyles={innerClasses.customCheckIconStyles}
            />
          )}

          <SenteceToDrop
            index={index}
            sentence={sentence}
            activeBoxIndex={activeBoxIndex}
            onDragLeave={handleDragLeave}
            onDragOver={handleDragOver}
            onDrop={handleDrop}
            droppedItems={droppedItems}
            validated={validated[index]}
          />
        </ListItem>
      ))}
    </List>
  );
};
