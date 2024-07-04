import React, { useEffect, useState } from 'react';
import Confetti from 'react-dom-confetti';

import { Backdrop, Button, Divider, Paper } from '@mui/material';
import * as innerClasses from './congratsComponent.styles';

interface Props {
  totalActivities: number;
  activitiesCompleted: number;
}

export const CongratsComponent: React.FC<Props> = props => {
  const { totalActivities, activitiesCompleted } = props;

  const [showBackdrop, setShowBackdrop] = useState(true);
  const [showConfetti, setShowConfetti] = useState(false);

  const handleClose = () => {
    setShowBackdrop(false);
    setShowConfetti(false);
  };

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

  useEffect(() => {
    if (activitiesCompleted === totalActivities) {
      setShowBackdrop(true);
    }
  }, [activitiesCompleted, totalActivities]);

  useEffect(() => {
    if (showBackdrop) {
      setShowConfetti(true);
    }
  }, [showBackdrop]);

  return (
    <>
      {showBackdrop && (
        <>
          <Backdrop
            sx={{
              display: 'flex',
              flexDirection: 'column',
              color: '#fff',
              zIndex: theme => theme.zIndex.drawer + 1,
            }}
            open={showBackdrop}
          >
            <Confetti active={showConfetti} config={config} />
            <div css={innerClasses.congratsComponent}>
              <h1>FELICIDADES</h1>

              <Paper sx={{ p: '4rem 3rem 2rem' }}>
                <h2>¡Bien hecho!</h2>

                <Divider css={innerClasses.dividerStyles} />

                <p>Gracias por completar la demostración</p>
              </Paper>

              <div css={innerClasses.imagesContainer}>
                <img src="/assets/images/ok-man.webp" alt="man say ok image" />
                <img
                  src="/assets/images/ok-woman.webp"
                  alt="woman say ok image"
                />
              </div>

              <Button variant="contained" onClick={handleClose}>
                Cerrar
              </Button>
            </div>
          </Backdrop>
        </>
      )}
    </>
  );
};
