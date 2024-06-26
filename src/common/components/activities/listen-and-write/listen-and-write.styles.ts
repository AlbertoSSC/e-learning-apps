import { css } from '@emotion/react';

export const inputsContainer = css`
  padding: 1rem 0;
`;

export const inputWidth = css`
  width: 100%;
  & .MuiFormControl-root {
    width: 100%;
  }
`;

export const singleListenAndWrite = css`
  display: flex;
  padding: 0.5rem 1.5rem 0.5rem 0.5rem;
  width: 100%;

  input {
    padding: 16px;
    font-size: larger;
  }
`;

export const checkIconCustomStyle = css`
  z-index: 1;
  top: 34px;
  left: 44px;
`;

export const audioStyle = css`
  padding-right: 1rem;
`;
