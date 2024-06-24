import { css } from '@emotion/react';

export const innerClasses = {
  sentenceContainer: css`
    padding: 2rem;

    &.MuiList-root {
      display: flex;
      flex-direction: column;
    }
  `,

  inputWidth: css`
    padding-bottom: 0.5rem;
    width: 100px;

    &.MuiFormControl-root {
      vertical-align: baseline;
    }

    & .MuiFormHelperText-root {
      display: flex;
      justify-content: center;
    }
  `,
};

export const listItem = css`
  color: #242424;

  &.MuiListItem-root {
    align-items: baseline;
  }
`;

export const checkIconCustomStyle = css`
  top: 15px;
  left: -18px;
`;
