import React from 'react';

import { Button, List, ListItem, ListItemText } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { FillInGapActivity, FillInGapSentence } from '@/core';
import { rowValidator } from './fill-in-gaps.helpers';
import { GapActivityRow } from './components/gap-activity-rows';

import * as innerClasses from './fill-in-gaps.sytles';
import {
  activityContainer,
  activityContent,
  correctionButton,
  listNumbers,
  repeatAndCorrectButtons,
} from '@/styles/activity.style';

interface Props {
  activity: FillInGapActivity;
}

export const FillInGapsComponent: React.FC<Props> = ({ activity }) => {
  const [gapsData, setGapsData] = React.useState<FillInGapSentence[]>(
    activity.sentenceList.map(sentence => ({
      ...sentence,
    }))
  );
  const [inputsValues, setInputsValues] = React.useState<string[][]>(
    new Array(activity.sentenceList.length).fill('')
  );
  const [isCorrectAnswers, setIsCorrectAnswers] = React.useState<boolean[][]>(
    []
  );

  React.useEffect(() => {
    const fillInGapsData = activity.sentenceList;
    setGapsData(fillInGapsData);
    setInputsValues(
      fillInGapsData?.map(sentence => new Array(sentence.gaps.length).fill(''))
    );
  }, []);

  const handleValidate = () => {
    gapsData.forEach((item, sentenceIndex) => {
      const rowValidation = rowValidator(item, inputsValues[sentenceIndex]);

      setIsCorrectAnswers(prev => {
        const newValue = [...prev];
        newValue[sentenceIndex] = rowValidation;
        return newValue;
      });
    });
  };

  const handleResetInputs = () => {
    setInputsValues(prev =>
      prev.map(sentenceInputs => sentenceInputs.map(() => ''))
    );
    setIsCorrectAnswers([]);
  };

  return (
    <article css={activityContainer}>
      <section css={[activityContent, innerClasses.fixedWidth]}>
        <List
          component="ol"
          id="gap-sentence-container"
          css={innerClasses.sentenceContainer}
        >
          {gapsData.map((item, sentenceIndex) => (
            <ListItem
              component="li"
              id={`gap-sentence-${item.id}`}
              key={item.id}
              css={innerClasses.listItem}
            >
              <ListItemText
                primary={`${sentenceIndex + 1}.`}
                css={[innerClasses.listItem, listNumbers]}
              />
              <GapActivityRow
                item={item}
                sentenceIndex={sentenceIndex}
                isCorrectAnswers={isCorrectAnswers}
                inputsValues={inputsValues}
                setInputsValues={setInputsValues}
              />
            </ListItem>
          ))}
        </List>
      </section>
      <section id="buttons-container" css={repeatAndCorrectButtons}>
        <Button
          variant="contained"
          startIcon={<LoopIcon />}
          onClick={handleResetInputs}
        >
          Repetir
        </Button>
        <Button
          variant="contained"
          css={correctionButton}
          onClick={handleValidate}
        >
          Corregir
        </Button>
      </section>
    </article>
  );
};
