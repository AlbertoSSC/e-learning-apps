import React from 'react';

import { List, ListItem, ListItemText } from '@mui/material';

import { SenteceToDrop } from './sentence-to-drop';

import { listNumbers } from '@/styles/activity.style';
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
          <ListItemText
            primary={`${index + 1}.`}
            css={[innerClasses.listItem, listNumbers]}
          />
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
