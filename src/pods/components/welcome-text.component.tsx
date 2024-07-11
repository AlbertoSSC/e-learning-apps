import { css, keyframes } from '@emotion/react';

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;

const scaleIn = keyframes`
  0% {
  opacity: 0;
    transform: scale(0);
  }
  80% {
  opacity: 1;
    transform: scale(1.2);
  }
  100% {
  opacity: 1;
    transform: scale(1);
  }
`;

const translateYIn = keyframes`
  from {
    transform: translateY(50px);
    opacity: 0;
  }
  to {
    transform: translateY(0);
    opacity: 1;
  }
`;

const welcomeToStyles = css`
  opacity: 0;
  animation: ${fadeIn} 0.5s ease-in-out forwards;
`;

const eLearningAppsStyles = css`
  line-height: 0.8;
  opacity: 0;
  animation: ${scaleIn} 0.5s ease-in-out 0.5s forwards;
`;

const demoStyles = css`
  opacity: 0;
  animation: ${translateYIn} 4s ease-in-out 2s forwards;
`;

const WelcomeTitle = () => {
  return (
    <>
      <h2 css={welcomeToStyles}>Welcome to</h2>
      <h1 css={eLearningAppsStyles}>e-Learning Apps</h1>
      <h2 css={demoStyles}>Demo</h2>
    </>
  );
};

export default WelcomeTitle;
