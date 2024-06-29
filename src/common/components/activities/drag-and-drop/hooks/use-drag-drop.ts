import { useState } from 'react';
import { randomizePositions } from '../drag-drop.helpers';

export const useDragDrop = (sentences: string[], images: string[]) => {
  const getShuffledImages = randomizePositions(images);
  const [shuffledImages, setShuffleImages] =
    useState<string[]>(getShuffledImages);

  const [validated, setValidated] = useState<(boolean | null)[]>(
    new Array(sentences.length).fill(null)
  );

  const [droppedItems, setDroppedItems] = useState<(string | null)[]>(
    new Array(sentences.length).fill(null)
  );

  const handleValidation = () => {
    const updatedValidation = [...validated];
    droppedItems.forEach((item, index) => {
      item === images[index]
        ? (updatedValidation[index] = true)
        : (updatedValidation[index] = false);
    });
    setValidated(updatedValidation);
  };

  const handleDrop = (sourceIndex: number, destinationIndex: number) => {
    const newDroppedItems = [...droppedItems];
    newDroppedItems[destinationIndex] = shuffledImages[sourceIndex];
    setDroppedItems(newDroppedItems);
  };

  const handleReset = () => {
    setShuffleImages(getShuffledImages);
    setDroppedItems(new Array(sentences.length).fill(null));
    setValidated(new Array(sentences.length).fill(null));
  };

  return {
    shuffledImages,
    validated,
    droppedItems,
    handleValidation,
    handleDrop,
    handleReset,
  };
};
