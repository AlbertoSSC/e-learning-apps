import cardListenMock from '../core/providers/cardListen_mockData.json';
import listenAndWriteMock from '../core/providers/listen&write_mockData.json';
import pushToSpeakMock from '../core/providers/pushToSpeak_mockData.json';
import fillInGapsMock from '../core/providers/fillInGaps_mockData.json';
import dragAndDropMock from '../core/providers/drag&Drop_mockData.json';
import testQuestionMock from '../core/providers/testQuestion_dataMock.json';

import {
  CardTextActivity,
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
} from '@/common';

import * as innerClasse from './activities-pod.styles';
import { TestQuestionComponent } from '@/common/components/activities/test-question/test-question.component';

export const ActivitiesPod = () => {
  return (
    <>
      <main>
        <article css={innerClasse.podArticleStyle}>
          <section css={innerClasse.podSectionsStyle}>
            <TestQuestionComponent
              activity={testQuestionMock as TestQuestionActivity}
            />
          </section>

          <section css={innerClasse.podSectionsStyle}>
            <DragAndDropComponent
              activity={dragAndDropMock as DragAndDropActivity}
            />
          </section>

          <section css={innerClasse.podSectionsStyle}>
            <FillInGapsComponent
              activity={fillInGapsMock as FillInGapActivity}
            />
          </section>

          <section css={innerClasse.podSectionsStyle}>
            <CardListenComponent media={cardListenMock as CardTextActivity} />
          </section>

          <section css={innerClasse.podSectionsStyle}>
            <PushToSpeakComponent
              activity={pushToSpeakMock as PushToSpeakActivity}
            />
          </section>

          <section css={innerClasse.podSectionsStyle}>
            <ListenAndWriteComponent
              activity={listenAndWriteMock as ListenAndWriteActivity}
            />
          </section>
        </article>
      </main>
      <footer></footer>
    </>
  );
};
