import React from 'react';

import { DndContext, DragEndEvent } from '@dnd-kit/core';

import { Button } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { DragAndDropActivity, useActivitiesContext } from '@/core';
import { SentenceListComponent, ImageListComponent } from './components';
import { ActivityProgressHeader } from '../components/activity-progression-header';
import { useDragDrop } from './hooks/use-drag-drop';
import { useExerciseCompletion } from '../hooks/use-exercise-completion';

import {
  activityComponent,
  activityContainer,
  activityContent,
  activityHeader,
  activityIcon,
  iconBG,
  buttonsContainer,
  repeatingButton,
} from '@/styles';
import * as innerClasses from './drag-drop.styles';

interface Props {
  activity: DragAndDropActivity;
  activityIndex: number;
}

export const DragAndDropComponent: React.FC<Props> = props => {
  const { activity, activityIndex } = props;

  const totalExercises = activity.images.length;

  const { isCompletedActivitiesContext, setIsCompletedActivitiesContext } =
    useActivitiesContext();

  const { totalExercisesCompleted, setIsCompletedExercise } =
    useExerciseCompletion(
      totalExercises,
      activityIndex,
      isCompletedActivitiesContext,
      setIsCompletedActivitiesContext
    );

  const {
    shuffledImages,
    validated,
    droppedItems,
    handleValidation,
    handleDrop,
    handleReset,
  } = useDragDrop(activity.sentences, activity.images);

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

  React.useEffect(() => {
    setIsCompletedExercise(validated);
  }, [validated]);

  return (
    <>
      <article css={activityComponent}>
        <section css={activityIcon}>
          <div css={iconBG}></div>
          <img
            src="/assets/images/activities_icons/letter-v.png"
            alt="  of the letter v"
            css={innerClasses.activityIconStyles}
          />
        </section>

        <section css={activityContainer}>
          <header css={activityHeader}>
            <ActivityProgressHeader
              title="Vocabulario"
              subtitle="Coloca la imagen en su lugar"
              totalExercises={totalExercises}
              completed={totalExercisesCompleted}
            />
          </header>

          <DndContext onDragEnd={handleDragEnd}>
            <main css={[activityContent, innerClasses.dragDropContainer]}>
              <SentenceListComponent
                sentences={activity.sentences}
                validated={validated}
                droppedItems={droppedItems}
              />
              <ImageListComponent images={shuffledImages} />
            </main>
          </DndContext>

          <footer css={buttonsContainer}>
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
          </footer>
        </section>
      </article>
    </>
  );
};
