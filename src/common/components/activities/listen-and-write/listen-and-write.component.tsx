import React from 'react';

import { Button, List, ListItem } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { ListenAndWriteActivity } from '@/core';

import { SingleAudioComponent } from './components/single-audio.component';
import { compareAnswers } from './listen-and-write.helpers';

import * as innerClasses from './listen-and-write.styles';
import {
  activityContainer,
  activityContent,
  repeatAndCorrectButtons,
  repeatingButton,
} from '@/styles';
import { CheckIconAnimation } from '@/common/utils';

interface Props {
  activity: ListenAndWriteActivity;
}

export const ListenAndWriteComponent: React.FC<Props> = props => {
  const { activity } = props;

  const [inputValues, setInputValues] = React.useState<string[]>(
    new Array(activity.audioList.length).fill('')
  );
  const [isCorrectAnswer, setIsCorrectAnswer] = React.useState<
    (boolean | undefined)[]
  >([]);

  const handleValidateAnswers = () => {
    const newCorrection = activity.audioList.map((audio, index) => {
      const userInput = inputValues[index];
      const correctAnswers = audio.correctAnswers;

      return compareAnswers(userInput, correctAnswers);
    });

    setIsCorrectAnswer(newCorrection);
  };

  const handleResetInputs = () => {
    setInputValues(new Array(activity.audioList.length).fill(''));
    setIsCorrectAnswer(new Array(activity.audioList.length).fill(undefined));
  };

  return (
    <article css={activityContainer}>
      <section css={[activityContent, innerClasses.inputsContainer]}>
        <List component="ol">
          {activity.audioList.map((audio, index) => (
            <React.Fragment key={audio.id}>
              <ListItem>
                {isCorrectAnswer[index] === true && (
                  <CheckIconAnimation
                    customStyles={innerClasses.checkIconCustomStyle}
                  />
                )}
                <SingleAudioComponent
                  index={index}
                  audioUrl={audio.audioUrl}
                  correctAnswers={audio.correctAnswers}
                  isCorrectAnswer={isCorrectAnswer[index]}
                  inputValues={inputValues}
                  setInputValues={setInputValues}
                />
              </ListItem>
            </React.Fragment>
          ))}
        </List>
      </section>
      <section css={repeatAndCorrectButtons}>
        <Button
          variant="contained"
          css={repeatingButton}
          startIcon={<LoopIcon />}
          onClick={handleResetInputs}
        >
          Repetir
        </Button>
        <Button variant="contained" onClick={handleValidateAnswers}>
          Corregir
        </Button>
      </section>
    </article>
  );
};
