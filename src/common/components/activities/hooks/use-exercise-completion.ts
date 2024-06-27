import { useState, useEffect } from 'react';

export const useExerciseCompletion = (
  totalExercises: number,
  activityIndex: number,
  isCompletedActivities: boolean[],
  setIsCompletedActivities: (newActivities: boolean[]) => void
) => {
  const [totalExercisesCompleted, setTotalExercisesCompleted] = useState(0);
  const [isCompletedExercise, setIsCompletedExercise] = useState<boolean[]>(
    Array(totalExercises).fill(false)
  );

  useEffect(() => {
    const completedCount = isCompletedExercise.filter(item => item).length;
    setTotalExercisesCompleted(completedCount);
  }, [isCompletedExercise]);

  useEffect(() => {
    if (totalExercisesCompleted === totalExercises) {
      const newActivityCompleted = [...isCompletedActivities];
      newActivityCompleted[activityIndex] = true;
      setIsCompletedActivities(newActivityCompleted);
    }
  }, [totalExercisesCompleted]);

  return {
    totalExercisesCompleted,
    isCompletedExercise,
    setIsCompletedExercise,
  };
};
