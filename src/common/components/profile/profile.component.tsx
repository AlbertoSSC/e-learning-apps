import { Avatar, Typography } from '@mui/material';

import { useActivitiesContext } from '@/core/providers/activities/activitiesContext.provider';

import { getAvatarImages } from '@/pods/components/get-avatar.component';
import { LinearProgressWithLabel } from './components/linear-progress.component';

import theme from '@/styles/themes/customMUI.theme';
import { activityContent } from '@/styles';
import * as innerClasses from './profile.styles';

export const ProfileComponent = () => {
  const {
    totalActivitiesContext,
    totalCompletedActivitiesContext,
    userNameInput,
    avatarToShow,
  } = useActivitiesContext();

  return (
    <article css={innerClasses.progressContainer}>
      <section css={[activityContent, innerClasses.progressContent]}>
        <Typography variant="inherit">Tu progreso</Typography>

        <Typography
          variant="h5"
          component={'h2'}
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
            width: 72,
            height: 72,
            backgroundColor: theme.palette.primary.light,
            marginBottom: '0.2rem',
            borderRadius: '50%',
            border: `4px solid ${theme.palette.primary.dark}`,
          }}
          alt="the user's avatar"
          src={getAvatarImages[avatarToShow]}
          variant="square"
        />
        <div css={innerClasses.userStyles}>
          <Typography
            variant="h6"
            component={'h3'}
            css={innerClasses.userNameStyles}
          >
            {userNameInput || 'Invitado'}
          </Typography>
        </div>
      </section>
    </article>
  );
};
