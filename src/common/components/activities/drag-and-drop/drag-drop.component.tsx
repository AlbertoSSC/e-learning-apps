import React from 'react';

import { Button } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { DragAndDropActivity } from '@/core';

import { SentenceListComponent, ImageListComponent } from './components';
import { useDragDrop } from './hooks/use-drag-drop';

import {
  activityContainer,
  activityContent,
  correctionButton,
  repeatAndCorrectButtons,
} from '@/styles';
import * as innerClasses from './drag-drop.styles';

export const DragAndDropComponent: React.FC<{
  activity: DragAndDropActivity;
}> = ({ activity }) => {
  const { sentences, images } = activity;

  const {
    shuffledImages,
    droppedItems,
    validated,
    activeBoxIndex,
    handleDragOver,
    handleDragStart,
    handleDragLeave,
    handleDrop,
    handleValidation,
    handleReset,
  } = useDragDrop(sentences, images);

  return (
    <>
      <article id="drag and drop activity" css={activityContainer}>
        <section
          id="drag-and-drop-container"
          css={[activityContent, innerClasses.DragDropContainer]}
          onDragOver={e => {
            e.preventDefault();
          }}
        >
          <SentenceListComponent
            sentences={sentences}
            droppedItems={droppedItems}
            validated={validated}
            handleDragOver={handleDragOver}
            handleDragLeave={handleDragLeave}
            handleDrop={handleDrop}
            activeBoxIndex={activeBoxIndex}
          />
          <ImageListComponent
            images={shuffledImages}
            handleDragStart={handleDragStart}
          />
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
            onClick={handleValidation}
          >
            Corregir
          </Button>
        </section>
      </article>
    </>
  );
};
