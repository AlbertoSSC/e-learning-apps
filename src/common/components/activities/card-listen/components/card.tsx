import React from 'react';
import { SerializedStyles } from '@emotion/react';

import {
  Button,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Popover,
  Typography,
} from '@mui/material';
import VisibilityIcon from '@mui/icons-material/Visibility';

import { AudioPlayer } from '@/common';
import { CardText } from '@/core/models';

import { cardActions, cardContainer, cardContent, cardMedia } from '@/styles';
import * as innerClasses from '../card-listen.style';

interface Props {
  card: CardText;
  animationClass?: SerializedStyles;
}

export const CardComponent: React.FC<Props> = ({ card, animationClass }) => {
  const [anchorElMap, setAnchorElMap] = React.useState<
    Record<string, HTMLButtonElement | null>
  >({});

  const handleClick = (
    event: React.MouseEvent<HTMLButtonElement>,
    cardId: string
  ) => {
    setAnchorElMap({ ...anchorElMap, [cardId]: event.currentTarget });
  };

  const handleClose = (cardId: string) => {
    setAnchorElMap({ ...anchorElMap, [cardId]: null });
  };

  return (
    <Card
      variant="outlined"
      id="inner card Container"
      css={[cardContainer, animationClass]}
    >
      <CardContent id="inner card Content" css={cardContent}>
        <CardMedia
          component="img"
          image={card.image.url}
          alt={`${card.image.name} image`}
          css={cardMedia}
        />
        <CardActions css={cardActions}>
          <AudioPlayer audioUrl={card.audioUrl} />
        </CardActions>

        {card.spanishText && (
          <>
            <Typography mb={2} variant="h5" color="text.secondary">
              {card.spanishText}
            </Typography>

            <CardActions css={cardActions}>
              <Button
                variant="contained"
                onClick={e => handleClick(e, card.id)}
                css={innerClasses.englishButton}
              >
                <VisibilityIcon aria-label="visibility icon" />
                <Typography>English</Typography>
              </Button>

              <Popover
                id={`popover-id${card.id}`}
                open={Boolean(anchorElMap[card.id])}
                anchorEl={anchorElMap[card.id]}
                onClose={() => handleClose(card.id)}
                anchorOrigin={{
                  vertical: 'bottom',
                  horizontal: 'center',
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'center',
                }}
              >
                <Typography css={innerClasses.englishPopover}>
                  {card.englishText}
                </Typography>
              </Popover>
            </CardActions>
          </>
        )}
      </CardContent>
    </Card>
  );
};
