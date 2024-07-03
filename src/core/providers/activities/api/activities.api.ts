import cardListenMock from '@/core/providers/mocks/cardListen_mockData.json';
import listenAndWriteMock from '@/core/providers/mocks/listen&write_mockData.json';
import pushToSpeakMock from '@/core/providers/mocks/pushToSpeak_mockData.json';
import fillInGapsMock from '@/core/providers/mocks/fillInGaps_mockData.json';
import dragAndDropMock from '@/core/providers/mocks/drag&Drop_mockData.json';
import testQuestionMock from '@/core/providers/mocks/testQuestion_dataMock.json';

import {
  CardListenActivity,
  DragAndDropActivity,
  FillInGapActivity,
  GetActivity,
  ListenAndWriteActivity,
  PushToSpeakActivity,
  TestQuestionActivity,
} from '@/core/models';

export const getMockData = (): GetActivity[] => {
  const cardListen = cardListenMock as CardListenActivity;
  const listenAndWrite = listenAndWriteMock as ListenAndWriteActivity;
  const fillInGaps = fillInGapsMock as FillInGapActivity;
  const pushToSpeak = pushToSpeakMock as PushToSpeakActivity;
  const dragAndDrop = dragAndDropMock as DragAndDropActivity;
  const testQuestion = testQuestionMock as TestQuestionActivity;

  return [
    { type: 'CardListenActivity', data: cardListen },
    { type: 'FillInGapActivity', data: fillInGaps },
    { type: 'TestQuestionActivity', data: testQuestion },
    { type: 'PushToSpeakActivity', data: pushToSpeak },
    { type: 'DragAndDropActivity', data: dragAndDrop },
    { type: 'ListenAndWriteActivity', data: listenAndWrite },
  ];
};
