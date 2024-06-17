import { css, keyframes } from '@emotion/react';

export const fixedHeight = css`
  justify-content: flex-end;
`;

export const cardContainer = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  max-width: 250px;
  box-shadow: 1px 1px 2px 0px #dadada;
`;

export const cardMedia = css`
  border-radius: 4px;
  aspect-ratio: 1;
`;

export const cardContent = css`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const spokenText = css`
  max-width: 180px;
`;

export const slideIn = keyframes`
  from {
    transform: translateX(100%);
    opacity: 0;
  }
  to {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const slideOut = keyframes`
  from {
    transform: translateX(0);
    opacity: 1;
  }
  to {
    transform: translateX(-100%);
    opacity: 0;
  }
`;

export const cardEnter = css`
  animation: ${slideIn} 0.3s ease-in-out;
`;

export const cardExit = css`
  animation: ${slideOut} 0.3s ease-in-out;
`;
