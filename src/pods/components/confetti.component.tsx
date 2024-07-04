import Confetti from 'react-dom-confetti';

const config = {
  angle: 90,
  spread: 360,
  startVelocity: 40,
  elementCount: 100,
  dragFriction: 0.12,
  duration: 5000,
  stagger: 3,
  width: '10px',
  height: '10px',
  perspective: '500px',
  colors: ['#a864fd', '#29cdff', '#78ff44', '#ff718d', '#fdff6a'],
};

export const ConfettiComponent = congrats => {
  return (
    <div id="confetti" style={{ zIndex: 999, display: 'flex', justifyContent: 'center' }}>
      <Confetti active={congrats} config={config} />
    </div>
  )
};
