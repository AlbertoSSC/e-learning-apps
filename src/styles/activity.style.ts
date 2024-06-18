import { css, keyframes } from '@emotion/react';

export const activityContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  overflow: hidden;
  border-radius: 4px;
  padding: 2rem;

  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
`;

export const activityContent = css`
  width: 100%;

  background-color: #fff;
  border-radius: 4px;
  transition: transform 0.5s ease-in-out;
`;

export const activityContentSlider = (currentCard: number) => css`
  display: flex;
  flex-direction: row;

  background-color: transparent;

  transform: translateX(${-currentCard * 100}%);
`;

const growAndFocus = keyframes`
  0% {
    transform: scale(0.8);
    filter: blur(5px);
    opacity: 0.5;
  }
  100% {
    transform: scale(1);
    filter: blur(0);
    opacity: 1;
  }
`;

const shrinkAndBlur = keyframes`
  0% {
    transform: scale(1);
    filter: blur(0);
    opacity: 1;
  }
  100% {
    transform: scale(0.7);
    filter: blur(5px);
    opacity: 0.5;
  }
`;

export const cardStyle = (isCurrent: boolean) => css`
  animation: ${isCurrent ? growAndFocus : shrinkAndBlur} 0.5s ease-in-out
    forwards;
`;

export const listNumbers = css`
  padding-right: 0.5rem;
  min-width: auto;

  &.MuiListItemText-root {
    flex: 0 1 auto;
  }
`;

export const repeatAndCorrectButtons = css`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 2rem 0 0;
`;

export const correctionButton = css`
  &.MuiButtonBase-root {
    background-color: green;
  }
`;

export const paginationStyle = css`
  padding: 2rem 2rem 1rem;
  border-radius: 4px;

  & .MuiPagination-ul {
    justify-content: center;
    & .MuiPaginationItem-root {
      background: rgba(255, 255, 255, 1);
      color: #242424;
      &.Mui-selected {
        border: 4px solid grey;
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;
