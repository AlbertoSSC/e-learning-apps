import {
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
  linearProgressClasses,
  styled,
} from '@mui/material';

const BorderLinearProgress = styled(LinearProgress)(({ theme }) => ({
  height: 10,
  borderRadius: 5,
  [`&.${linearProgressClasses.colorPrimary}`]: {
    backgroundColor:
      theme.palette.grey[theme.palette.mode === 'light' ? 200 : 800],
  },
  [`& .${linearProgressClasses.bar}`]: {
    borderRadius: 5,
  },
}));

export const LinearProgressWithLabel = (
  props: LinearProgressProps & {
    completedactivities: number;
    totalactivities: number;
  }
) => {
  const value = (props.completedactivities / props.totalactivities) * 100;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <BorderLinearProgress variant="determinate" {...props} value={value} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.completedactivities
        )}/${props.totalactivities}`}</Typography>
      </Box>
    </Box>
  );
};
