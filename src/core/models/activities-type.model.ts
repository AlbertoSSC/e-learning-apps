import {
  CardListenActivity,
  DragAndDropActivity,
  FillInGapActivity,
  ListenAndWriteActivity,
  PushToSpeakActivity,
  TestQuestionActivity,
} from './activities.model';

export type Status = 'pending' | 'in-progress' | 'completed';

export type ActivityType =
  | 'video'
  | 'card-text'
  | 'push-to-speak'
  | 'listen-and-write'
  | 'fill-in-gap'
  | 'drag-and-drop'
  | 'test-question';

export interface GetActivity {
  type:
    | 'CardListenActivity'
    | 'ListenAndWriteActivity'
    | 'PushToSpeakActivity'
    | 'FillInGapActivity'
    | 'DragAndDropActivity'
    | 'TestQuestionActivity';
  data:
    | CardListenActivity
    | ListenAndWriteActivity
    | PushToSpeakActivity
    | FillInGapActivity
    | DragAndDropActivity
    | TestQuestionActivity;
}
