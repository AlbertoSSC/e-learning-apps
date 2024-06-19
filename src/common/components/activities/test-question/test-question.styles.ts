import { css } from '@emotion/react';

export const testContainer = css`
  text-align: left;
  padding: 1.5rem;
`;

export const questionContainer = css`
  padding: 1rem;
`;

export const option = (color: string) => css`
  background-color: #ebebeb;
  margin: 0.1rem;
  border-radius: 4px;
  color: #242424;

  &.MuiFormControlLabel-root {
    margin-left: 0;
    margin-right: 0;
  }

  & .MuiRadio-root.Mui-checked {
    color: ${color};
  }
`;
