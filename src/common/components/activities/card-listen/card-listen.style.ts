import { css } from '@emotion/react';

export const cardContainer = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  min-width: fit-content;
  max-width: 250px;
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
