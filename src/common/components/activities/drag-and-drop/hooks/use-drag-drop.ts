import React from 'react';
import { randomizePositions } from '../drag-drop.helpers';

export const useDragDrop = (sentences: string[], images: string[]) => {
  const getShuffledImages = randomizePositions(images);
  const [shuffledImages, setShuffleImages] =
    React.useState<string[]>(getShuffledImages);

  const [droppedItems, setDroppedItems] = React.useState<(string | null)[]>(
    new Array(sentences.length).fill(null)
  );
  const [draggedItem, setDraggedItem] = React.useState<string | null>(null);

  const [validated, setValidated] = React.useState<(number | null)[]>(
    new Array(sentences.length).fill(null)
  );

  const [activeBoxIndex, setActiveBoxIndex] = React.useState<number>(-1);

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
    setShuffleImages(getShuffledImages);
    setDroppedItems(new Array(sentences.length).fill(null));
    setValidated(new Array(sentences.length).fill(null));
  };

  return {
    shuffledImages,
    droppedItems,
    validated,
    draggedItem,
    activeBoxIndex,
    handleDragOver,
    handleDragStart,
    handleDragLeave,
    handleDrop,
    handleValidation,
    handleReset,
  };
};
