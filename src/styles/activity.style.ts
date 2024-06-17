import { css } from '@emotion/react';

export const activityContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;

  overflow: hidden;
  border-radius: 4px;
  padding: 2rem;

  background: rgba(255, 255, 255, 0.3);
  backdrop-filter: blur(10px);
`;

export const activityContent = css`
  background-color: #fff;
  border-radius: 4px;
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

export const correctionButton = css`
  &.MuiButtonBase-root {
    background-color: green;
  }
`;

export const paginationStyle = css`
  padding: 2rem 2rem 1rem;
  border-radius: 4px;

  & .MuiPagination-ul {
    justify-content: center;
    & .MuiPaginationItem-root {
      background: rgba(255, 255, 255, 1);
      color: #242424;
      &.Mui-selected {
        border: 4px solid grey;
        background: rgba(255, 255, 255, 0.8);
      }
    }
  }
`;
