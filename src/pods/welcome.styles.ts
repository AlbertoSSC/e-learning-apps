import theme from '@/styles/themes/customMUI.theme';
import { css } from '@mui/material';

export const welcomeContainer = css`
  padding: 0 1rem 1rem;
  display: grid;
  place-items: center;
`;

export const welcomeCard = css`
  padding-block: 2rem 0;

  > h6 {
    color: ${theme.palette.text.secondary};
    margin-bottom: 1rem;
    font-weight: 600;
  }
`;

export const headerStyles = css`
  display: flex;
  flex-direction: column;

  text-align: center;
  margin-bottom: 2rem;

  > h1 {
    font-size: 4rem;
    letter-spacing: .1rem;
    padding: 0.5rem;
    margin: 0;
  }

  > h2 {
    font-size: 1.25rem;
    margin: 0;
    padding-top: 0.8rem;
  }
`;

export const startButton = css`
  border-radius: 16px;
  padding: 1rem 2rem;

  font-size: 1.2rem;
  font-weight: 600;
`;

export const textFieldStyles = css`
  &.MuiFormControl-root {
    width: 80%;
    & .MuiInputLabel-root {
      color: transparent;
    }
  }

  input {
    padding: 0.5rem;

    font-size: 1.5rem;
    text-align: center;
  }
`;

export const avatarContainer = css`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 2rem;
`;

export const avatarStyles = css`
  width: 150px;
  height: 150px;

  position: relative;

  ::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: ${theme.palette.primary.main};
    opacity: 0.2;
    z-index: 1;
  }

  > img {
    position: relative;
    z-index: 2;

    object-fit: contain;
    clip-path: circle(45%);

    transform: translateX(2px);
  }
`;

export const arrowIconStyles = (isDisable: boolean) => css`
  cursor: ${isDisable ? 'inherit' : 'pointer'};

  margin: 1rem;

  color: ${isDisable
    ? theme.palette.primary.light
    : theme.palette.primary.main};

  opacity: ${isDisable ? '0.5' : '1'};
`;

export const accordionStyles = css`
  margin-top: 1rem;
  width: 80%;

  svg {
    color: ${theme.palette.primary.contrastText};
  }

  &.MuiAccordion-root {
    max-width: 400px;
    color: ${theme.palette.primary.contrastText};
    border-bottom-right-radius: 12px;
    border-bottom-left-radius: 12px;
    background-color: ${theme.palette.primary.dark};

    & span {
      margin: 0;
      color: ${theme.palette.primary.contrastText};
      font-size: 1.1rem;
      font-family: 'Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS',
        sans-serif;
      font-weight: 100;
      letter-spacing: 0.5px;
    }

    ::before {
      display: none;
    }
  }
`;
