import {
  CardListenActivity,
  FillInGapActivity,
  ListenAndWriteActivity,
  PushToSpeakActivity,
  DragAndDropActivity,
  TestQuestionActivity,
} from '@/core/models';
import {
  CardListenComponent,
  ListenAndWriteComponent,
  PushToSpeakComponent,
  FillInGapsComponent,
  DragAndDropComponent,
  TestQuestionComponent,
} from '@/common';

export const getActivity = (activity, index) => {
  switch (activity.type) {
    case 'CardListenActivity':
      return (
        <CardListenComponent
          activity={activity.data as CardListenActivity}
          activityIndex={index}
        />
      );
    case 'ListenAndWriteActivity':
      return (
        <ListenAndWriteComponent
          activity={activity.data as ListenAndWriteActivity}
          activityIndex={index}
        />
      );
    case 'PushToSpeakActivity':
      return (
        <PushToSpeakComponent
          activity={activity.data as PushToSpeakActivity}
          activityIndex={index}
        />
      );
    case 'FillInGapActivity':
      return (
        <FillInGapsComponent
          activity={activity.data as FillInGapActivity}
          activityIndex={index}
        />
      );
    case 'DragAndDropActivity':
      return (
        <DragAndDropComponent
          activity={activity.data as DragAndDropActivity}
          activityIndex={index}
        />
      );
    case 'TestQuestionActivity':
      return (
        <TestQuestionComponent
          activity={activity.data as TestQuestionActivity}
          activityIndex={index}
        />
      );
    default:
      return null;
  }
};
