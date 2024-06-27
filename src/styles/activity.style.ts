import { css } from '@emotion/react';

import theme from './themes/customMUI.theme';

export const activityContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;
  min-width: 366px;

  overflow: hidden;
  border-radius: 24px;
  padding: 0.5rem;
  padding-bottom: 1.5rem;

  background: rgba(220, 220, 220, 0.3);
  backdrop-filter: blur(10px);

  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15),
    0px 4px 4px 0 rgba(0, 0, 0, 1);
`;

export const activityContent = css`
  width: 100%;
  min-width: 350px;

  background-color: #fff;
  border-radius: 24px;
  transition: transform 0.5s ease-in-out;
`;

export const activityHeader = css`
  width: 100%;
`;

export const contentHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 1rem;
  margin-bottom: 2rem;
  color: ${theme.palette.primary.main};
  font-weight: 500;

  & .MuiTypography-h5 {
    font-weight: bold;
  }
`;

export const circularProgress = css`
  display: flex;
`;

export const listNumbers = css`
  padding-right: 0.5rem;
  min-width: auto;

  &.MuiListItemText-root {
    flex: 0 1 auto;
  }
`;

export const repeatAndCorrectButtons = css`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 2rem 0 0;
`;

export const repeatingButton = css`
  &.MuiButtonBase-root {
    background-color: ${theme.palette.secondary.main};
    color: ${theme.palette.secondary.contrastText};
    &:hover {
      background-color: ${theme.palette.secondary.light};
    }
  }
`;

export const paginationStyle = css`
  padding: 2rem 0rem 1rem;

  & .MuiPagination-ul {
    justify-content: center;
    & .MuiPaginationItem-root {
      &.Mui-selected {
        border: 4px solid rgba(205, 205, 205, 0.5);
        background: white;
      }
    }
  }
`;

export const paginationWidth = css`
  width: max-content;
`;
