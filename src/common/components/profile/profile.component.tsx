import { Avatar, Typography } from '@mui/material';

import { useActivitiesContext } from '@/core/providers/activities/activitiesContext.provider';

import { LinearProgressWithLabel } from './components/linear-progress.component';

import theme from '@/styles/themes/customMUI.theme';
import { activityContent } from '@/styles';
import * as innerClasses from './profile.styles';

export const ProfileComponent = () => {
  const { totalActivities, totalCompletedActivities } = useActivitiesContext();

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
          {Math.round((totalCompletedActivities / totalActivities) * 100)}%
          Completado
        </Typography>

        <LinearProgressWithLabel
          completedactivities={totalCompletedActivities}
          totalactivities={totalActivities}
        />
      </section>

      <section css={innerClasses.profileStyles}>
        {/* <Typography variant="subtitle2">Student</Typography> */}
        <Avatar sx={{ width: 56, height: 56 }} alt="" src="" />
        <div css={innerClasses.userStyles}>
          <Typography variant="h6">UserNickname</Typography>
        </div>
      </section>
    </article>
  );
};
