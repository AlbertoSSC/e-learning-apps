import React from 'react';

import { SerializedStyles } from '@emotion/react';

import {
  Card,
  CardContent,
  Typography,
  Button,
  Divider,
  CardMedia,
  CardActions,
} from '@mui/material';

import StopIcon from '@mui/icons-material/Stop';
import MicIcon from '@mui/icons-material/Mic';

import { cardActions, cardContainer, cardContent, cardMedia } from '@/styles';
import * as innerClasses from '../push-to-speak.styles';
import { CheckIconAnimation } from '@/common/utils';

interface CardComponentProps {
  imageUrl: string;
  text: string;
  handleSpeak: () => void;
  isListening: boolean;
  handleStopClick: () => void;
  spokenText: string;
  animationclass?: SerializedStyles;
}

const CardComponent: React.FC<CardComponentProps> = ({
  imageUrl,
  text,
  handleSpeak,
  isListening,
  handleStopClick,
  spokenText,
  animationclass,
}) => {
  return (
    <Card
      variant="outlined"
      id="card-container"
      css={[cardContainer, animationclass]}
    >
      <CardContent id="inner card Content" css={cardContent}>
        <CardMedia
          component="img"
          image={imageUrl}
          alt={`${text} image`}
          css={cardMedia}
        />

        <Typography m={3} variant="h5" color="text.secondary">
          {text}
        </Typography>

        {spokenText && (
          <>
            <Divider variant="middle" flexItem />
            {spokenText === '¡Correcto!' && <CheckIconAnimation customStyles={innerClasses.checkIconStyles} />}
            <Typography m={3} variant="body1" css={innerClasses.spokenText}>
              {spokenText}
            </Typography>
          </>
        )}

        <CardActions css={[cardActions, innerClasses.speakButton]}>
          <Button
            variant="contained"
            startIcon={isListening ? <StopIcon /> : <MicIcon />}
            color={!isListening ? 'primary' : 'error'}
            onClick={isListening ? handleStopClick : handleSpeak}
          >
            {isListening ? `Escuchando...` : `Pulse para hablar`}
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
