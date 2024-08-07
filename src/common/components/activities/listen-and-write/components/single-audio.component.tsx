import { AudioPlayer } from '@/common';
import { UserTextInput } from './user-text-input';

import * as innerClasses from '../listen-and-write.styles';

interface Props {
  index: number;
  audioUrl: string;
  correctAnswers: string[];
  isCorrectAnswer: boolean | null;
  inputValues: string[];
  setInputValues: React.Dispatch<React.SetStateAction<string[]>>;
}

export const SingleAudioComponent: React.FC<Props> = props => {
  const {
    index,
    audioUrl,
    correctAnswers,
    isCorrectAnswer,
    inputValues,
    setInputValues,
  } = props;

  return (
    <article css={innerClasses.singleListenAndWrite}>
      <section css={innerClasses.audioStyle}>
        <AudioPlayer audioUrl={audioUrl} />
      </section>

      <section css={innerClasses.inputStyles}>
        <UserTextInput
          inputIndex={index}
          correctAnswers={correctAnswers}
          isCorrectAnswer={isCorrectAnswer}
          inputValues={inputValues}
          setInputValues={setInputValues}
        />
      </section>
    </article>
  );
};
