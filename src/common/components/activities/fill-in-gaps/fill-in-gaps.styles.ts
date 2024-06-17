import { css } from '@emotion/react';

export const innerClasses = {
  sentenceContainer: css`
    padding: 2rem;
    &.MuiList-root {
      display: flex;
      flex-direction: column;
    }
  `,

  fixedWidth: css`
    min-width: 350px;
  `,

  inputWidth: css`
    width: 100px;
  `,
};

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
