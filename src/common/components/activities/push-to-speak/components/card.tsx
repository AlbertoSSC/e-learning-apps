import React from 'react';

import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  CardMedia,
} from '@mui/material';

import StopIcon from '@mui/icons-material/Stop';
import MicIcon from '@mui/icons-material/Mic';

import * as innerClasses from '../push-to-speak.styles';
import { SerializedStyles } from '@emotion/react';

interface CardComponentProps {
  imageUrl: string;
  text: string;
  handleSpeak: () => void;
  isListening: boolean;
  handleStopClick: () => void;
  spokenText: string;
  animationClass?: SerializedStyles;
}

const CardComponent: React.FC<CardComponentProps> = ({
  imageUrl,
  text,
  handleSpeak,
  isListening,
  handleStopClick,
  spokenText,
  animationClass,
}) => {
  return (
    <Card
      variant="outlined"
      id="card-container"
      css={[innerClasses.cardContainer, animationClass]}
    >
      {imageUrl && (
        <CardMedia
          css={innerClasses.cardMedia}
          component="img"
          image={imageUrl}
        />
      )}

      <CardContent id="card-content" css={innerClasses.cardContent}>
        <Typography m={3} variant="h5" color="text.secondary">
          {text}
        </Typography>

        <Divider variant="middle" flexItem />

        {spokenText && <p css={innerClasses.spokenText}>{spokenText}</p>}

        <Button
          variant="contained"
          startIcon={isListening ? <StopIcon /> : <MicIcon />}
          color={!isListening ? 'primary' : 'error'}
          onClick={isListening ? handleStopClick : handleSpeak}
        >
          {isListening ? `Escuchando...` : `Pulse para hablar`}
        </Button>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
