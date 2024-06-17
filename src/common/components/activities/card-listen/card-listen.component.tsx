import React from 'react';
import { SerializedStyles } from '@emotion/react';
import { Pagination } from '@mui/material';

import { CardTextActivity } from '@/core/models';
import { CardComponent } from './components/card';

import * as innerClasses from './card-listen.style';
import { cardExit, cardEnter } from './card-listen.style';
import { activityContainer, paginationStyle } from '@/styles/activity.style';

interface Props {
  media: CardTextActivity;
}

export const CardListenComponent: React.FC<Props> = props => {
  const { media } = props;

  const [animationClass, setAnimationClass] =
    React.useState<SerializedStyles>();

  const [page, setPage] = React.useState(1);

  const handleChangePage = (
    _event: React.ChangeEvent<unknown>,
    newPage: number
  ) => {
    setAnimationClass(cardExit);

    setTimeout(() => {
      setPage(newPage);
      setAnimationClass(cardEnter);
    }, 200);
  };

  const currentCards = media.cardTextList.slice(page - 1, page);

  return (
    <article css={[activityContainer, innerClasses.fixedHeight]}>
      <section>
        {currentCards.map(card => (
          <CardComponent
            card={card}
            animationClass={animationClass}
            key={card.id}
          />
        ))}
      </section>

      <section>
        {media.cardTextList.length > 1 && (
          <Pagination
            css={paginationStyle}
            siblingCount={0}
            variant="outlined"
            count={media.cardTextList.length}
            page={page}
            onChange={handleChangePage}
          />
        )}
      </section>
    </article>
  );
};
