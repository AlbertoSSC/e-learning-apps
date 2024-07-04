import React from 'react';

import { Backdrop, Button, Divider, Paper } from '@mui/material';
import * as innerClasses from './congratsComponent.styles';

interface Props {
  totalActivities: number;
  activitiesCompleted: number;
}

export const CongratsComponent: React.FC<Props> = props => {
  const { totalActivities, activitiesCompleted } = props;

  const [congrats, setCongrats] = React.useState(false);
  console.log(congrats);

  const handleClose = () => {
    setCongrats(false);
  };

  React.useEffect(() => {
    activitiesCompleted === totalActivities
      ? setCongrats(true)
      : setCongrats(false);
  }, [totalActivities, activitiesCompleted]);

  return (
    <>
      {congrats && (
        <Backdrop
          sx={{ color: '#fff', zIndex: theme => theme.zIndex.drawer + 1 }}
          open={congrats}
        >
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
      )}
    </>
  );
};
