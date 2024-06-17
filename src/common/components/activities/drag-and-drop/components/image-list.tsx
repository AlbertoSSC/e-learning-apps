import React from 'react';

import { List, ListItem } from '@mui/material';

import * as innerClasses from '../drag-drop.styles';

interface Props {
  shuffleImages: string[];
  onDragStart: (image: string) => void;
}

export const ImageListComponent: React.FC<Props> = props => {
  const { shuffleImages, onDragStart } = props;

  return (
    <List id="image-list" component="ul" css={innerClasses.imageContainer}>
      {shuffleImages.map((image, index) => (
        <ListItem
          id={`image-${index}`}
          key={`dndImage-${index}`}
          component="li"
          css={innerClasses.listItemImage}
          draggable="true"
          onDragStart={() => {
            onDragStart(image);
          }}
        >
          {image}
        </ListItem>
      ))}
    </List>
  );
};
