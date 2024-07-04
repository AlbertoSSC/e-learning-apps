import { Avatar, Typography } from '@mui/material';

import { useActivitiesContext } from '@/core/providers/activities/activitiesContext.provider';

import { LinearProgressWithLabel } from './components/linear-progress.component';

import theme from '@/styles/themes/customMUI.theme';
import { activityContent } from '@/styles';
import * as innerClasses from './profile.styles';

export const ProfileComponent = () => {
  const { totalActivitiesContext, totalCompletedActivitiesContext } =
    useActivitiesContext();

  return (
    <article css={innerClasses.progressContainer}>
      <section css={[activityContent, innerClasses.progressContent]}>
        <Typography variant="inherit">Tu progreso</Typography>

        <Typography
          variant="h6"
          fontWeight="bold"
          color={theme.palette.primary.main}
        >
          {Math.round(
            (totalCompletedActivitiesContext / totalActivitiesContext) * 100
          )}
          % Completado
        </Typography>

        <LinearProgressWithLabel
          completedactivities={totalCompletedActivitiesContext}
          totalactivitiescontext={totalActivitiesContext}
        />
      </section>

      <section css={innerClasses.profileStyles}>
        <Avatar
          sx={{
            width: 56,
            height: 56,
            backgroundColor: theme.palette.secondary.main,
            marginBottom: '0.2rem',
            borderRadius: '0.5rem',
          }}
          alt="avatar image"
          src="/assets/images/avatar.webp"
          variant="square"
        />
        <div css={innerClasses.userStyles}>
          <Typography variant="h6" css={innerClasses.userNameStyles}>
            UserName
          </Typography>
        </div>
      </section>
    </article>
  );
};
