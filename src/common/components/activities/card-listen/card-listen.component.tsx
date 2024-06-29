import React from 'react';

import { Pagination } from '@mui/material';

import { ActivityProgressHeader } from '../components/activity-progression-header';
import { useActivitiesContext } from '@/core/providers';
import { CardListenActivity } from '@/core/models';
import { CardComponent } from './components/card';

import {
  activityContainer,
  activityContent,
  paginationStyle,
  paginationWidth,
  activityContentCardSlider,
  cardStyle,
  activityHeader,
} from '@/styles';
import { useExerciseCompletion } from '../hooks/use-exercise-completion';

interface Props {
  activity: CardListenActivity;
  activityIndex: number;
}

export const CardListenComponent: React.FC<Props> = props => {
  const { activity, activityIndex } = props;
  const totalExercises = activity.cardTextList.length;

  const { isCompletedActivitiesContext, setIsCompletedActivitiesContext } =
    useActivitiesContext();

  const { totalExercisesCompleted, handleCompletedExerciseForCard } =
    useExerciseCompletion(
      totalExercises,
      activityIndex,
      isCompletedActivitiesContext,
      setIsCompletedActivitiesContext
    );

  const [currentCard, setCurrentCard] = React.useState(0);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setCurrentCard(value - 1);
  };

  return (
    <article css={activityContainer}>
      <header css={activityHeader}>
        <ActivityProgressHeader
          title="Escuchar"
          subtitle="Atención a la pronunciación"
          totalExercises={totalExercises}
          completed={totalExercisesCompleted}
        />
      </header>

      <main css={[activityContent, activityContentCardSlider(currentCard)]}>
        {activity.cardTextList.map((card, index) => (
          <CardComponent
            key={card.id}
            card={card}
            animationclass={cardStyle(index === currentCard)}
            handleCompletedExercise={handleCompletedExerciseForCard}
            index={index}
          />
        ))}
      </main>

      {activity.cardTextList.length > 1 && (
        <footer css={paginationWidth}>
          <Pagination
            css={paginationStyle}
            siblingCount={0}
            count={activity.cardTextList.length}
            page={currentCard + 1}
            onChange={handleChangePage}
          />
        </footer>
      )}
    </article>
  );
};
