import { css, keyframes } from '@emotion/react';

const scaleCircle = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const drawCheck = keyframes`
  0% {
    stroke-dashoffset: 100;
  }
  100% {
    stroke-dashoffset: 0;
  }
`;

const borderCircle = keyframes`
  0% {
    transform: scale(0);
    opacity: 0;
  }
  50% {
    opacity: 1;
  }
  100% {
    transform: scale(1);
    opacity: 1;
  }
`;

const fadeOut = keyframes`
  0% {
    opacity: 1;
  }
  100% {
    opacity: 0;
  }
`;

export const outerCircleWrapperStyle = css`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const outerCircleStyle = css`
  position: absolute;
  width: 120px;
  height: 120px;
  border: 5px solid green;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  animation: ${borderCircle} 0.5s forwards, ${fadeOut} 0.3s 0.5s forwards;
`;

export const innerCircleStyle = css`
  width: 100px;
  height: 100px;
  background-color: green;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  opacity: 0;
  transform: scale(0);
  animation: ${scaleCircle} 0.5s 0.25s forwards;
`;

export const checkStyle = css`
  width: 80%;
  height: 80%;
  stroke: white;
  stroke-width: 5;
  fill: none;
  stroke-dasharray: 100;
  stroke-dashoffset: 100;
  animation: ${drawCheck} 0.75s 0.5s forwards;
`;