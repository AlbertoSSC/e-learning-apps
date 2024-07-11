import { css, keyframes } from '@emotion/react';

const revealY = keyframes`
  0% {
    clip-path: inset(0 0 100% 0);
    opacity: 0;
  }
  100% {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`;

const scaleUpCenter = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  80%{
    transform: scale(1.5);
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const revealXCenter = keyframes`
   0% {
    clip-path: inset(0 50% 0 50%);
    opacity: 0;
  }
  20%{
    opacity: 1;
  }
  100% {
    clip-path: inset(0 0 0 0);
    opacity: 1;
  }
`;

const bounceIn = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  80% {
    transform: scale(2);
    opacity: 1;
}
  100% {
    transform: scale(1);
    opacity: 1;
  }

`;

const slideInLeft = keyframes`
  0% {
    transform: translateX(-200%);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
  }
  60%{
    transform: translateX(0);
    opacity: 1;
  }
  70%{
    transform: translateX(-50%);
    opacity: 1;
  }
  80%{
    transform: translateX(0);
    opacity: 1;
  }
  90%{
    transform: translateX(-20%);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

const slideInRight = keyframes`
  0% {
    transform: translateX(200%);
    opacity: 0;
  }
  50% {
    transform: translateX(0);
    opacity: 1;
  }
  60%{
    transform: translateX(0);
    opacity: 1;
  }
  70%{
    transform: translateX(50%);
    opacity: 1;
  }
  80%{
    transform: translateX(0);
    opacity: 1;
  }
  90%{
    transform: translateX(20%);
    opacity: 1;
  }
  100% {
    transform: translateX(0);
    opacity: 1;
  }
`;

export const animatedStyles = {
  paper: css`
    opacity: 0;
    animation: ${revealY} 0.5s 1s ease-in-out forwards;
  `,
  avatar: css`
    opacity: 0;
    animation: ${scaleUpCenter} 0.5s 1s ease-in-out forwards;
  `,
  arrowLeft: css`
    opacity: 0;
    animation: ${slideInLeft} 2s 1.2s ease-in-out forwards;
  `,
  arrowRight: css`
    opacity: 0;
    animation: ${slideInRight} 2s 1.2s ease-in-out forwards;
  `,
  textField: css`
    /* opacity: 0; */
    /* animation: ${revealXCenter} 1.5s 1.5s ease-in-out forwards; */
  `,
  accordion: css`
    opacity: 0;
    animation: ${revealY} 0.5s 2s ease-in-out forwards;
  `,
  button: css`
    opacity: 0;
    animation: ${bounceIn} 0.5s 1.5s ease-in-out forwards;
  `,
};
