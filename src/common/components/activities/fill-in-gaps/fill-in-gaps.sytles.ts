import { css } from '@emotion/react';

export const sentenceContainer = css`
  padding: 2rem;
  &.MuiList-root {
    display: flex;
    flex-direction: column;
  }
`;

export const button = css`
  &.MuiButtonBase-root {
    margin: 0 1rem;
  }
`;

export const listItem = css`
  color: #242424;
  &.MuiListItem-root {
    align-items: baseline;
  }
`;

export const activityRow = css`
  display: flex;
  flex-wrap: wrap;
  align-items: baseline;
  gap: 0.5rem;
`;

export const fixedWidth = css`
  min-width: 350px;
`;

export const inputWidth = css`
  width: 100px;
`;