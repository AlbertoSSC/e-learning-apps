import { css } from '@emotion/react';

export const inputStyles = css`
  width: 100%;
  transform: translateY(-10px);

  & .MuiFormControl-root {
    width: 100%;
  }
`;

export const singleListenAndWrite = css`
  display: flex;
  padding-right: 1rem;
  width: 100%;
  align-items: baseline;

  input {
    font-size: larger;
  }
`;

export const checkIconCustomStyle = css`
  z-index: 1;
  top: 20px;
  left: 24px;
`;

export const audioStyle = css`
  padding-right: 0.5rem;
`;

export const liStyles = css`
  padding: 0.2rem;
`;

export const headerStyles = css`
  h5 {
    padding-top: 5px;
    max-width: 120px;
    line-height: 1.1;
  }
`;

export const activityIconStyles = css`
  top: 5px;
  rotate: 12deg;
`;
