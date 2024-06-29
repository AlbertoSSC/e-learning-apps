import { useState, useEffect } from 'react';

export const useExerciseCompletion = (
  totalExercises: number,
  activityIndex: number,
  isCompletedActivitiesContext: (boolean | null)[],
  setIsCompletedActivitiesContext: (newActivities: (boolean | null)[]) => void
) => {
  const [totalExercisesCompleted, setTotalExercisesCompleted] = useState(0);
  const [isCompletedExercise, setIsCompletedExercise] = useState<
    (boolean | null)[]
  >(Array(totalExercises).fill(false));

  const handleCompletedExercise = (index: number) => {
    const newExerciseCompleted = [...isCompletedExercise];
    newExerciseCompleted[index] = true;

    setIsCompletedExercise(newExerciseCompleted);
  };

  useEffect(() => {
    const completedCount = isCompletedExercise.filter(item => item).length;
    setTotalExercisesCompleted(completedCount);
  }, [isCompletedExercise]);

  useEffect(() => {
    const newActivityCompleted = [...isCompletedActivitiesContext];

    totalExercisesCompleted === totalExercises
      ? (newActivityCompleted[activityIndex] = true)
      : (newActivityCompleted[activityIndex] = false);

    setIsCompletedActivitiesContext(newActivityCompleted);
  }, [totalExercisesCompleted]);

  return {
    totalExercisesCompleted,
    setIsCompletedExercise,
    handleCompletedExerciseForCard: handleCompletedExercise,
  };
};
