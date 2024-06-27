import { ActivityType, Status } from './activities-type.model';

export interface Resource {
  name: string;
  url: string;
}

export interface BaseActivity {
  activityId: string;
  type: ActivityType;
  status: Status;
}

export interface TestQuestions {
  id: string;
  sentence: string;
  options: string[];
  correctAnswer: string;
}

export interface TestQuestionActivity extends BaseActivity {
  title: string;
  sentenceList: TestQuestions[];
}

export interface DragAndDropActivity extends BaseActivity {
  id: string;
  sentences: string[];
  images: string[];
}

export interface Video extends BaseActivity {
  type: 'video';
  title: string;
  description?: string;
  videoUrl: string;
  image: Resource;
}

export interface CardText {
  id: string;
  image: Resource;
  audioUrl: string;
  spanishText?: string;
  englishText?: string;
}

export interface CardListenActivity extends BaseActivity {
  type: 'card-text';
  cardTextList: CardText[];
}

export interface PushToSpeakActivity extends BaseActivity {
  type: 'push-to-speak';
  imageList?: Resource[];
  textList: string[];
}

export interface ListenAndWriteAudio {
  id: string;
  audioUrl: string;
  correctAnswers: string[];
}

export interface ListenAndWriteActivity extends BaseActivity {
  type: 'listen-and-write';
  title: string;
  audioList: ListenAndWriteAudio[];
}

export interface Gap {
  options: string[];
}

export interface FillInGapSentence {
  id: string;
  sentence: string;
  gaps: Gap[];
}

export interface FillInGapActivity extends BaseActivity {
  type: 'fill-in-gap';
  title: string;
  image?: Resource;
  sentenceList: FillInGapSentence[];
}

export type Activity =
  | Video
  | CardListenActivity
  | FillInGapActivity
  | ListenAndWriteActivity
  | PushToSpeakActivity;

export interface Lesson {
  lessonId: string;
  name: string;
  status: Status;
  activities: Activity[];
  guide: Resource;
}
