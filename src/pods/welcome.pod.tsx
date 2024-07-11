import React from 'react';
import { useNavigate } from 'react-router-dom';

import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Avatar,
  Button,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  TextField,
  Typography,
} from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

import WelcomeTitle from './components/welcome-text.component';
import { useActivitiesContext } from '@/core';
import { getAvatarImages } from './components/get-avatar.component';

import { activityContainer, buttonsContainer } from '@/styles';
import * as innerClasses from './welcome.styles';
import { animatedStyles } from './welcome-pod.animation.styles';

export const WelcomePod = () => {
  const { setUserNameInput, setAvatarToShow } = useActivitiesContext();
  const navigate = useNavigate();

  const [inputValue, setInputValue] = React.useState('');
  const [avatarSelected, setAvatarSelected] = React.useState(0);
  const [isNextDisable, setIsNextDisable] = React.useState(false);
  const [isPrevDisable, setIsPrevDisable] = React.useState(true);

  const handleStartDemo = () => {
    setUserNameInput(inputValue);
    setAvatarToShow(avatarSelected);

    navigate('/activities');
  };

  const handleInputChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setInputValue(e.target.value);
  };

  const handleNextAvatar = () => {
    if (avatarSelected < getAvatarImages.length - 1) {
      setAvatarSelected(avatarSelected + 1);
      setIsPrevDisable(false);
      if (avatarSelected === getAvatarImages.length - 2) {
        setIsNextDisable(true);
      }
    }
  };

  const handlePrevAvatar = () => {
    if (avatarSelected > 0) {
      setAvatarSelected(avatarSelected - 1);
      setIsNextDisable(false);
      if (avatarSelected === 1) {
        setIsPrevDisable(true);
      }
    }
  };

  return (
    <div css={innerClasses.welcomeContainer}>
      <header css={innerClasses.headerStyles}>
        <WelcomeTitle />
      </header>

      <Paper
        css={[
          activityContainer,
          innerClasses.welcomeCard,
          animatedStyles.paper,
        ]}
      >
        <Typography variant="h6" component={'h1'}>
          Your Profile
        </Typography>

        <Divider sx={{ width: '50%' }} />

        <div css={innerClasses.avatarContainer}>
          <ArrowBackIosNewIcon
            onClick={handlePrevAvatar}
            css={[
              innerClasses.arrowIconStyles(isPrevDisable),
              animatedStyles.arrowLeft,
            ]}
          />
          <Avatar
            src={getAvatarImages[avatarSelected]}
            alt="avatar selected"
            css={[innerClasses.avatarStyles, animatedStyles.avatar]}
          />
          <ArrowForwardIosIcon
            onClick={handleNextAvatar}
            css={[
              innerClasses.arrowIconStyles(isNextDisable),
              animatedStyles.arrowRight,
            ]}
          />
        </div>

        <TextField
          id="input-user-name"
          label="input-user-name"
          hiddenLabel
          focused
          inputProps={{ maxLength: 14 }}
          variant="filled"
          placeholder="Enter your name"
          css={[innerClasses.textFieldStyles, animatedStyles.textField]}
          onChange={e => handleInputChange(e)}
        />

        <Accordion
          css={[innerClasses.accordionStyles, animatedStyles.accordion]}
        >
          <AccordionSummary
            id="panel-header"
            aria-controls="panel-content"
            expandIcon={<ExpandMoreIcon />}
          >
            Activity Guidelines
          </AccordionSummary>
          <AccordionDetails>
            <List component={'ul'}>
              <ListItem>
                <ListItemText>
                  Corrections focus on beginner level: capitalization,
                  punctuation, accents, and special characters are not
                  considered. For example, if the ideal response is "¡Buenos
                  días!", "buenos dias" will be accepted.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  To correct the activity, click the "Correct" button. All
                  corrected answers and the ideal responses will be displayed.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  You can repeat exercises as many times as you want by clicking
                  the "Repeat" button.
                </ListItemText>
              </ListItem>
              <ListItem>
                <ListItemText>
                  ** This is a demo, no data will be stored. **
                </ListItemText>
              </ListItem>
            </List>
          </AccordionDetails>
        </Accordion>

        <div css={buttonsContainer}>
          <Button
            variant="contained"
            css={[innerClasses.startButton, animatedStyles.button]}
            onClick={handleStartDemo}
          >
            Start
          </Button>
        </div>
      </Paper>
    </div>
  );
};
