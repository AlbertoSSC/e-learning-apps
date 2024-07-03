import theme from '@/styles/themes/customMUI.theme';
import { css } from '@emotion/react';

export const sentenceContainer = css`
  padding: 1rem 1rem 0;

  &.MuiList-root {
    display: flex;
    flex-direction: column;
  }
`;

export const inputWidth = css`
  padding-bottom: 0.5rem;
  width: 100px;

  &.MuiFormControl-root {
    vertical-align: baseline;
  }
`;

export const listItem = css`
  color: ${theme.palette.greyColor.main};

  &.MuiListItem-root {
    align-items: baseline;
    padding-block: 0.4rem;
  }
`;

export const checkIconCustomStyle = css`
  top: 15px;
  left: -18px;
`;

export const activityIconStyles = css`
  left: 5px;
  rotate: 15deg;
`;
