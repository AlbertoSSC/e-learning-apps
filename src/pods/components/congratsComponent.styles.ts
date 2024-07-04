import theme from '@/styles/themes/customMUI.theme';
import { css } from '@mui/material';

export const congratsComponent = css`
  display: flex;
  flex-direction: column;
  position: relative;
  text-align: center;
  justify-content: center;

  perspective: 100px;

  h1 {
    opacity: 0;
    position: absolute;
    top: 8%;
    left: 50%;
    transform: translate(-50%, -50%);
    animation: entry 2s ease;
    color: ${theme.palette.primary.main};
  }

  h2 {
    opacity: 0;
    animation: entry 1s ease forwards;
    animation-delay: 1s;
    color: ${theme.palette.primary.dark};
  }

  p {
    opacity: 0;
    animation: textFade 1s ease forwards;
    animation-delay: 2s;
  }

  button {
    opacity: 0;
    animation: textFade 1s ease forwards;
    animation-delay: 3s;
  }

  @keyframes entry {
    0% {
      opacity: 0;
      translate: 0px 100px 100px;
    }
    100% {
      opacity: 1;
      translate: 0px 0px 0px;
    }
  }

  @keyframes textFade {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }
`;

export const imagesContainer = css`
  position: absolute;
  top: 25%;
  left: 49%;
  transform: translate(-50%, -50%);

  display: flex;
  min-width: 50vw;
  justify-content: space-between;

  perspective: 100px;
  
  img {
    max-width: 200px;

    &:first-of-type {
      opacity: 0;
      animation: firstEntry 1s ease forwards;
      animation-delay: 2s;
    }

    &:last-of-type {
      opacity: 0;
      animation: secondEntry 1s ease forwards;
      animation-delay: 2s;
    }
  }

  @keyframes firstEntry {
    0% {
      opacity: 0;
      translate: -800px 100px -200px;
    }
    100% {
      opacity: 1;
      translate: 0px 0px 0px;
    }
  }
  @keyframes secondEntry {
    0% {
      opacity: 0;
      translate: 800px 100px -200px;
    }
    100% {
      opacity: 1;
      translate: 0px 0px 0px;
    }
  }
`;

export const dividerStyles = css`
  opacity: 0;
  height: 3px;
  border-radius: 50%;
  background-color: ${theme.palette.secondary.main};

  @keyframes scaler {
    0% {
      opacity: 1;
      transform: scale(0);
    }
    100% {
      opacity: 1;
      transform: scale(1);
    }
  }
  animation: scaler 1s ease forwards;
  animation-delay: 2s;
`;
