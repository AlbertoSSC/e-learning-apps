import React from 'react';

import { Pagination } from '@mui/material';

import { CardTextActivity } from '@/core/models';
import { CardComponent } from './components/card';

import {
  activityContainer,
  activityContent,
  paginationStyle,
  paginationWidth,
  activityContentCardSlider,
  cardStyle,
} from '@/styles';

interface Props {
  media: CardTextActivity;
}

export const CardListenComponent: React.FC<Props> = props => {
  const { media } = props;

  const [currentCard, setCurrentCard] = React.useState(0);
  const [page, setPage] = React.useState(1);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    value: number
  ) => {
    setPage(value);
    setCurrentCard(value - 1);
  };

  return (
    <article css={activityContainer}>
      <section css={[activityContent, activityContentCardSlider(currentCard)]}>
        {media.cardTextList.map((card, index) => (
          <CardComponent
            card={card}
            animationClass={cardStyle(index === currentCard)}
            key={card.id}
          />
        ))}
      </section>

      {media.cardTextList.length > 1 && (
        <section css={paginationWidth}>
          <Pagination
            css={paginationStyle}
            siblingCount={0}
            count={media.cardTextList.length}
            page={page}
            onChange={handleChangePage}
          />
        </section>
      )}
    </article>
  );
};
