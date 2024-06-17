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

import * as innerClasses from '../card-listen.style';

import { AudioPlayer } from '@/common';
import { CardText } from '@/core/models';

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
      id="cardContainer"
      css={[innerClasses.cardContainer, animationClass]}
    >
      <CardContent id="cardContent" css={innerClasses.cardContent}>
        <CardMedia
          component="img"
          image={card.image.url}
          alt={card.image.name}
          css={innerClasses.cardMedia}
        />
        <CardActions css={innerClasses.cardActions}>
          <AudioPlayer audioUrl={card.audioUrl} />
        </CardActions>

        {card.spanishText && (
          <>
            <Typography variant="h6" color="text.secondary">
              {card.spanishText}
            </Typography>

            <CardActions css={innerClasses.cardActions}>
              <Button
                variant="contained"
                onClick={e => handleClick(e, card.id)}
                css={innerClasses.englishButton}
              >
                <VisibilityIcon aria-label="visibility icon" />
                <Typography component="span">English</Typography>
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
