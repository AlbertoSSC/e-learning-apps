import {
  Avatar,
  Box,
  LinearProgress,
  LinearProgressProps,
  Typography,
  linearProgressClasses,
  styled,
} from '@mui/material';

import { activityContent } from '@/styles';
import * as innerClasses from './profile.styles';
import theme from '@/styles/themes/customMUI.theme';

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

const LinearProgressWithLabel = (
  props: LinearProgressProps & {
    activitiesCompleted: number;
    totalActivities: number;
  }
) => {
  const value = (props.activitiesCompleted / props.totalActivities) * 100;

  return (
    <Box sx={{ display: 'flex', alignItems: 'center' }}>
      <Box sx={{ width: '100%', mr: 1 }}>
        <BorderLinearProgress variant="determinate" {...props} value={value} />
      </Box>
      <Box sx={{ minWidth: 35 }}>
        <Typography variant="body2" color="text.secondary">{`${Math.round(
          props.activitiesCompleted
        )}/${props.totalActivities}`}</Typography>
      </Box>
    </Box>
  );
};

export const ProfileComponent = () => {
  return (
    <article css={innerClasses.progressContainer}>
      <section css={[activityContent, innerClasses.progressContent]}>
        <Typography variant="subtitle1" color="text.secondary">
          Tu progreso
        </Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          color={theme.palette.primary.main}
        >
          30% Completado
        </Typography>

        <LinearProgressWithLabel
          activitiesCompleted={30}
          totalActivities={100}
        />
      </section>

      <section css={innerClasses.profileStyles}>
        <Avatar sx={{ width: 56, height: 56 }} alt="" src="" />
        <div css={innerClasses.userStyles}>
          {/* <Typography variant="subtitle2">Student</Typography> */}
          <Typography variant="h6">UserNickname</Typography>
        </div>
      </section>
    </article>
  );
};
