import { SerializedStyles, css } from '@emotion/react';

export const DragDropContainer = css`
  display: flex;
  justify-content: space-around;
  min-width: 350px;
  padding: 2rem 0;
`;

export const imageContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const sentenceText = css`
  display: flex;
  align-items: center;
  flex: 1 1 auto;
  justify-content: space-between;
`;

export const listItemImage = css`
  &.MuiListItem-root {
    font-size: x-large;
  }
`;

export const listItem = css`
  color: #242424;
  &.MuiListItemText-root {
    align-items: baseline;
  }
`;

export const validationStyle = (
  borderStyle: SerializedStyles,
  activeBoxIndex: number | null,
  index: number
) => css`
  display: inline-block;
  align-content: center;
  text-align: center;

  border: 1px solid lightgrey;
  border-radius: 8% 8% 0% 0%;
  border-width: 0px 0px 2px;
  border-bottom-color: ${borderStyle};

  padding: 0.5rem;
  margin-left: 1rem;

  min-width: 3.5rem;
  min-height: 3.5rem;
  font-size: x-large;
  background-color: ${activeBoxIndex === index ? 'lightblue' : '#f0f0f0'};
`;
