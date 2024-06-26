import React from 'react';

import { Button, List, ListItem } from '@mui/material';
import LoopIcon from '@mui/icons-material/Loop';

import { TestQuestionActivity } from '@/core';
import { Question } from './components/question';
import { useTestQuestionState } from './hooks/use-test-question';

import {
  activityContainer,
  activityContent,
  repeatAndCorrectButtons,
  repeatingButton,
} from '@/styles';
import * as innerClasses from './test-question.styles';
import { CheckIconAnimation } from '@/common/utils';
import theme from '@/styles/themes/customMUI.theme';

export interface TestQuestionComponentProps {
  activity: TestQuestionActivity;
}

export const TestQuestionComponent: React.FC<TestQuestionComponentProps> = ({
  activity,
}) => {
  const {
    values,
    answersCorrection,
    helpertext,
    handleChange,
    handleValidation,
    handleReset,
  } = useTestQuestionState(activity);

  const correctionColorStyle = (index: number): string => {
    if (answersCorrection[index] === true) return theme.palette.success.main;
    if (answersCorrection[index] === false) return theme.palette.error.main;
    return theme.palette.primary.main;
  };

  const formErrorStyle = (index: number): boolean => {
    if (answersCorrection[index] === true) return false;
    if (answersCorrection[index] === false) return true;
    return false;
  };

  return (
    <article css={activityContainer}>
      <section css={[activityContent, innerClasses.testContainer]}>
        <List>
          {activity.sentenceList.map((sentence, index) => (
            <ListItem key={`test-sentence-${index}`}>
              {answersCorrection[index] === true && (
                <CheckIconAnimation
                  customStyles={innerClasses.checkIconCustomStyle}
                />
              )}
              <Question
                sentence={sentence}
                index={index}
                formErrorStyle={formErrorStyle}
                values={values}
                handleChange={handleChange}
                helpertext={helpertext}
                correctionColorStyle={correctionColorStyle}
              />
            </ListItem>
          ))}
        </List>
      </section>

      <section css={repeatAndCorrectButtons}>
        <Button
          variant="contained"
          css={repeatingButton}
          startIcon={<LoopIcon />}
          onClick={handleReset}
        >
          Repetir
        </Button>
        <Button variant="contained" onClick={handleValidation}>
          Corregir
        </Button>
      </section>
    </article>
  );
};
