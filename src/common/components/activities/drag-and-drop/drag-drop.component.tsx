import React from 'react';
import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { Button } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';
import { DragAndDropActivity } from '@/core';
import { SentenceListComponent, ImageListComponent } from './components';
import { useDragDrop } from './hooks/use-drag-drop';
import {
  activityContainer,
  activityContent,
  repeatAndCorrectButtons,
  repeatingButton,
} from '@/styles';
import * as innerClasses from './drag-drop.styles';

interface Props {
  activity: DragAndDropActivity;
}

export const DragAndDropComponent: React.FC<Props> = ({ activity }) => {
  const { sentences, images } = activity;
  const {
    shuffledImages,
    validated,
    droppedItems,
    handleValidation,
    handleDrop,
    handleReset,
  } = useDragDrop(sentences, images);

  const handleDragEnd = (event: DragEndEvent) => {
    const { active, over } = event;

    if (over) {
      const sourceIndex = parseInt(
        (active.id as string).replace('dndImage-', ''),
        10
      );
      const destinationIndex = parseInt(
        (over.id as string).replace('droppable-', ''),
        10
      );

      if (!isNaN(sourceIndex) && !isNaN(destinationIndex)) {
        handleDrop(sourceIndex, destinationIndex);
      }
    }
  };

  return (
    <DndContext onDragEnd={handleDragEnd}>
      <article css={activityContainer}>
        <section css={[activityContent, innerClasses.dragDropContainer]}>
          <SentenceListComponent
            sentences={sentences}
            validated={validated}
            droppedItems={droppedItems}
          />
          <ImageListComponent images={shuffledImages} />
        </section>

        <section css={repeatAndCorrectButtons}>
          <Button
            variant="contained"
            css={repeatingButton}
            startIcon={<LoopIcon />}
            onClick={handleReset}
          >
            Repetir
          </Button>

          <Button variant="contained" onClick={handleValidation}>
            Corregir
          </Button>
        </section>
      </article>
    </DndContext>
  );
};
