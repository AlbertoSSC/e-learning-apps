import React from 'react';

import { Button } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { DragAndDropActivity } from '@/core';

import { randomizePositions } from './drag-drop.helpers';
import { SentenceListComponent } from './components/sentence-list';
import { ImageListComponent } from './components/image-list';

import * as innerClasses from './drag-drop.styles';
import {
  activityContainer,
  activityContent,
  correctionButton,
  repeatAndCorrectButtons,
} from '@/styles/activity.style';

export const DragAndDropComponent: React.FC<{
  activity: DragAndDropActivity;
}> = ({ activity }) => {
  const { sentences, images } = activity;

  const shuffledImages = randomizePositions(images);
  const [shuffleImages, setShuffleImages] = React.useState<string[]>(images);

  const [draggedItem, setDraggedItem] = React.useState<string | null>(null);
  const [droppedItems, setDroppedItems] = React.useState<(string | null)[]>(
    new Array(sentences.length).fill(null)
  );
  const [activeBoxIndex, setActiveBoxIndex] = React.useState<number>(-1);

  const [validated, setValidated] = React.useState<(number | null)[]>(
    new Array(sentences.length).fill(null)
  );

  const handleDragOver = (
    e: React.DragEvent<HTMLDivElement>,
    index: number
  ) => {
    e.preventDefault();
    setActiveBoxIndex(index);
  };

  const handleDragStart = (image: string) => {
    setDraggedItem(image);
  };

  const handleDragLeave = () => {
    setActiveBoxIndex(-1);
  };

  const handleDrop = (index: number) => {
    const updatedDroppedItems = [...droppedItems];
    updatedDroppedItems[index] = draggedItem;
    setDroppedItems(updatedDroppedItems);
    setActiveBoxIndex(-1);
    setDraggedItem(null);
  };

  const handleValidation = () => {
    const updatedValidation = [...validated];

    for (let i = 0; i < sentences.length; i++) {
      images[i] === droppedItems[i]
        ? (updatedValidation[i] = i)
        : (updatedValidation[i] = -1);
    }
    setValidated(updatedValidation);
  };

  const handleReset = () => {
    setShuffleImages(shuffledImages);
    setDroppedItems(new Array(sentences.length).fill(null));
    setValidated(new Array(sentences.length).fill(null));
  };

  React.useEffect(() => {
    setShuffleImages(shuffledImages);
  }, []);

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
            activeBoxIndex={activeBoxIndex}
            droppedItems={droppedItems}
            validated={validated}
            handleDragLeave={handleDragLeave}
            handleDragOver={handleDragOver}
            handleDrop={handleDrop}
          />
          <ImageListComponent
            shuffleImages={shuffleImages}
            onDragStart={handleDragStart}
          />
        </section>

        <section id="buttons-container" css={repeatAndCorrectButtons}>
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
