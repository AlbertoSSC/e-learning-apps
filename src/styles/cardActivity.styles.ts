import { css, keyframes } from '@emotion/react';

export const activityContentCardSlider = (currentCard: number) => css`
  display: flex;
  flex-direction: row;
  max-width: 350px;

  @media (width < 400px) {
    max-width: 290px;
  }

  background-color: transparent;

  transform: translateX(${-currentCard * 100}%);
`;

const growAndFocus = keyframes`
  0% {
    transform: scale(0.7);
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

export const cardContainer = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  min-width: fit-content;

  border: none;
  border-radius: 24px;
`;

export const cardContent = css`
  &.MuiCardContent-root {
    padding: 0 0 1rem;
  }
`;

export const cardMedia = css`
  aspect-ratio: 1;
  max-width: fit-content;
`;

export const cardActions = css`
  justify-content: center;
`;
