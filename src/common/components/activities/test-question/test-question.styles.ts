import theme from '@/styles/themes/customMUI.theme';
import { css } from '@emotion/react';

export const testContainer = css`
  text-align: left;
  padding: 0 2rem;
  width: fit-content;
  min-width: 350px;
`;

export const questionContainer = css`
  width: 100%;
`;

export const option = (color: string) => css`
  background-color: ${theme.palette.greyColor.light};
  margin: 0.1rem;
  border-radius: 24px;
  color: ${theme.palette.greyColor.main};

  &.MuiFormControlLabel-root {
    margin-left: 0;
    margin-right: 0;
  }

  & .MuiRadio-root.Mui-checked {
    color: ${color};
  }
`;

export const checkIconCustomStyle = css`
  top: 7px;
  left: -20px;
`;

export const labelStyles = css`
  padding-bottom: 0.3rem;
  color: ${theme.palette.greyColor.main};
`;

export const activityIconStyles = css`
  top: 8px;
`;

export const liStyles = css`
  padding-bottom: 2rem;
  &:last-child {
    padding-bottom: 0;
  }
`;
