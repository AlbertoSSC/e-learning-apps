import React from 'react';

import {
  CircularProgress,
  CircularProgressProps,
  Typography,
  Box,
} from '@mui/material';
import theme from '@/styles/themes/customMUI.theme';

const CircularProgressWithLabel = (
  props: CircularProgressProps & { value: number }
) => {
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress
        size={50}
        variant="determinate"
        value={100}
        sx={{
          color: theme =>
            theme.palette.mode === 'light'
              ? theme.palette.grey[200]
              : theme.palette.grey[800],
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      />

      <CircularProgress
        size={50}
        thickness={props.value === 0 ? 0 : 4}
        variant="determinate"
        {...props}
        sx={{
          color: theme =>
            props.value === 100
              ? theme.palette.success.main
              : theme.palette.primary.main,
        }}
      />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="caption"
          component="div"
          color={
            props.value === 100 ? theme.palette.success.main : 'text.secondary'
          }
          fontWeight={props.value === 100 ? 'bold' : 'none'}
        >{`${Math.round(props.value)}%`}</Typography>
      </Box>
    </Box>
  );
};

interface Props {
  exercises: number;
  completed: number;
}

export const CircularWithValueLabel: React.FC<Props> = props => {
  const { exercises, completed } = props;

  const [progress, setProgress] = React.useState(10);

  React.useEffect(() => {
    const exercisesProgress = (completed / exercises) * 100;
    const isValidProgress = !Number.isNaN(exercisesProgress)
      ? exercisesProgress
      : 0;

    setProgress(isValidProgress);
  }, [completed, exercises]);

  return <CircularProgressWithLabel value={progress} />;
};
