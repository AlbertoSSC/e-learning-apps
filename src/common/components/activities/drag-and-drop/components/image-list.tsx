import React from 'react';

import { List, ListItem } from '@mui/material';

import * as innerClasses from '../drag-drop.styles';

interface Props {
  images: string[];
  handleDragStart: (image: string) => void;
}

export const ImageListComponent: React.FC<Props> = props => {
  const { images, handleDragStart } = props;

  return (
    <List id="image-list" component="ul" css={innerClasses.imageContainer}>
      {images.map((image, index) => (
        <ListItem
          id={`image-${index}`}
          key={`dndImage-${index}`}
          component="li"
          css={innerClasses.listItemImage}
          draggable="true"
          onDragStart={() => {
            handleDragStart(image);
          }}
        >
          {image}
        </ListItem>
      ))}
    </List>
  );
};
