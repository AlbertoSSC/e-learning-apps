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

export const cardContent = css`
  display: flex;
  flex-direction: column;

  &.MuiCardContent-root {
    padding: 0 0 2rem;
  }
`;

export const cardMedia = css`
  border-radius: 4px;
  padding-bottom: 0.5rem;
`;

export const cardActions = css`
  justify-content: center;
`;

export const englishButton = css`
  margin-top: 0.5rem;
  gap: 1rem;
`;

export const englishPopover = css`
  padding: 1rem;
`;
