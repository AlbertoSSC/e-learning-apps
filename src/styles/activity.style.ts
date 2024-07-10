import { css } from '@emotion/react';

import theme from './themes/customMUI.theme';

export const activityComponent = css`
  position: relative;
  width: 100%;
  display: flex;
  justify-content: center;
  padding-top: 1rem;
`;

export const activityContainer = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  width: 100%;
  max-width: 650px;
  padding: 1rem;

  overflow: hidden;
  background-color: white;

  /* background: linear-gradient(white, white) padding-box,
  linear-gradient(
    to right,
    white,
    ${theme.palette.secondary.main},
    ${theme.palette.secondary.main},
    ${theme.palette.secondary.main}
    )
    border-box; */

  border: double transparent;
  border-radius: 40px;
  border-width: 12px 0 0;
  background-image: linear-gradient(white, white),
    linear-gradient(to top, transparent, ${theme.palette.secondary.main});
  background-origin: border-box;
  background-clip: padding-box, border-box;

  backdrop-filter: blur(5px);

  box-shadow: 0px 8px 12px 6px rgba(0, 0, 0, 0.15),
    0px 4px 4px 0 rgba(0, 0, 0, 1);
`;

export const activityContent = css`
  width: 100%;

  border-radius: 24px;
  transition: transform 0.5s ease-in-out;
`;

export const activityHeader = css`
  padding: 1rem;
  width: 100%;
  position: relative;
`;

export const contentHeader = css`
  display: flex;
  justify-content: space-between;
  align-items: center;

  h4 {
    color: ${theme.palette.primary.main};
    font-weight: bold;
  }
  p {
    padding-top: 0.2rem;
    font-weight: 500;
    line-height: 1.2rem;
  }
`;

export const circularProgress = css`
  position: absolute;
  top: 10px;
  right: 15px;
`;

export const listNumbers = css`
  padding-right: 0.5rem;
  min-width: auto;

  &.MuiListItemText-root {
    flex: 0 1 auto;
  }
`;

export const buttonsContainer = css`
  display: flex;
  width: 100%;
  justify-content: space-evenly;
  padding: 2rem 0;
`;

export const repeatingButton = css`
  &.MuiButtonBase-root {
    background-color: transparent;
    color: ${theme.palette.primary.main};
    /* &:hover {
      background-color: ${theme.palette.secondary.light};
    } */
  }
`;

export const paginationStyle = css`
  padding: 0.5rem 0rem 1rem;

  & .MuiPagination-ul {
    justify-content: center;

    & .MuiPaginationItem-root {
      &.Mui-selected {
      }
    }
  }
`;

export const footerWidth = css`
  width: 100%;
`;

export const activityIcon = css`
  position: absolute;
  top: -24px;
  left: 50%;
  z-index: 1;

  transform: translateX(-50%);

  width: 100px;
  height: 90px;
  
  img {
    z-index: 2;
    position: relative;
    object-fit: contain;
    transform: translateX(10px);

    height: 100%;
  }
`;

export const iconBG = css`
  position: absolute;
  top: 45%;
  left: 55%;
  transform: translateX(-50%);

  width: 100px;
  height: 80px;

  overflow: hidden;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    bottom: 40px;
    width: 100%;
    height: 100%;
    border-radius: 12px;
    background: linear-gradient(
      0deg,
      rgba(255, 255, 255, 0) 0%,
      ${theme.palette.secondary.main} 35%
    );
  }
`;
