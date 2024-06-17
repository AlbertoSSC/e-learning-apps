import { AudioPlayer } from '@/common';
import { UserTextInput } from './user-text-input';

import * as classes from '../listen-and-write.styles';

interface Props {
  index: number;
  audioUrl: string;
  correctAnswers: string[];
  isCorrectAnswer: boolean | undefined;
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
    <article css={classes.singleListenAndWrite}>
      <section>
        <AudioPlayer audioUrl={audioUrl} />
      </section>

      <section>
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
