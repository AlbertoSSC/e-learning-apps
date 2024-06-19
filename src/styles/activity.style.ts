import { css } from '@emotion/react';

export const activityContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  overflow: hidden;
  border-radius: 4px;
  padding: 1.5rem;

  background: rgba(220, 220, 220, 0.3);
  backdrop-filter: blur(10px);
`;

export const activityContent = css`
  max-width: -webkit-fill-available;
  
  background-color: #fff;
  border-radius: 4px;
  transition: transform 0.5s ease-in-out;
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
