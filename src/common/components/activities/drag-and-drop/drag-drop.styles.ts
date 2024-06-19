import { SerializedStyles, css } from '@emotion/react';

export const DragDropContainer = css`
  display: flex;
  justify-content: space-around;
  padding: 1.5rem;
  width: -webkit-fill-available;
  max-width: 400px;
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
    padding: 0.5rem;
  }
`;

export const listItem = css`
  color: #242424;
  &.MuiListItem-root {
    font-size: x-large;
    padding: 0.5rem;
  }
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

  margin-left: 1rem;

  min-width: 3.5rem;
  min-height: 3.5rem;
  font-size: x-large;
  background-color: ${activeBoxIndex === index ? 'lightblue' : '#f0f0f0'};
`;
