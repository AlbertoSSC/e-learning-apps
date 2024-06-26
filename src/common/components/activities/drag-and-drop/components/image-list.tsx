import React from 'react';
import { List, ListItem } from '@mui/material';
import * as innerClasses from '../drag-drop.styles';
import { Draggable } from './draggable';

interface Props {
  images: string[];
}

export const ImageListComponent: React.FC<Props> = ({ images }) => {
  return (
    <List id="image-list" component="ul" css={innerClasses.imageContainer}>
      {images.map((image, index) => (
        <Draggable id={`dndImage-${index}`} key={`dndImage-${index}`}>
          <ListItem
            key={`image-${index}`}
            id={`image-${index}`}
            component="li"
            css={innerClasses.listItemImage}
          >
            {image}
          </ListItem>
        </Draggable>
      ))}
    </List>
  );
};
