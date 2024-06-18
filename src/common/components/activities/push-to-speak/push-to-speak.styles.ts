import { css } from '@emotion/react';

export const cardContainer = css`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;

  min-width: fit-content;
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
`;

export const spokenText = css`
  max-width: 180px;
`;
