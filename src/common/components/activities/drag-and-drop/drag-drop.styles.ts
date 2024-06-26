import { css, SerializedStyles } from '@emotion/react';

export const dragDropContainer = css`
  display: flex;
  justify-content: space-around;
  padding: 1.5rem;
  width: 100%;
  max-width: 400px;
`;

export const imageContainer = css`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
`;

export const sentenceText = css`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
  color: #242424;
`;

export const listItemImage = css`
  width: 50px;
  height: 50px;
  background: transparent;
  border-radius: 8px;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  margin-bottom: 1rem;
  font-size: x-large;
`;

export const listItem = css`
  font-size: large;
`;

export const droppedItem = css`
  border-radius: 8px;
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const validationStyle = (
  borderStyle: SerializedStyles,
  isOver: boolean
) => css`
  display: inline-block;
  align-content: center;
  text-align: center;
  border: 1px solid lightgrey;
  border-radius: 8px 8px 0 0;
  border-width: 0px 0px 2px;
  ${borderStyle};
  margin-left: 1rem;
  width: 3.2rem;
  height: 3.5rem;
  font-size: x-large;
  background-color: ${isOver ? 'lightblue' : '#f0f0f0'};
`;

export const customCheckIconStyles = css`
  top: 22px;
  left: -25px;
`;
