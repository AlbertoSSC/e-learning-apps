import React from 'react';

import { ProfileComponent } from '@/common';
import { GetActivity } from '@/core';

import { getMockData } from '@/core/providers/activities/api';
import { getActivity } from './components/get-activity.component';
import { useActivitiesContext } from '@/core/providers/activities/activitiesContext.provider';

import * as innerClasse from './activities-pod.styles';
import { CongratsComponent } from './components/congrats.component';
import { Typography } from '@mui/material';

export const ActivitiesPod = () => {
  const {
    setTotalActivitiesContext,
    setIsCompletedActivitiesContext,
    totalActivitiesContext,
    totalCompletedActivitiesContext,
  } = useActivitiesContext();

  const [activities, setActivities] = React.useState<GetActivity[]>([]);

  React.useEffect(() => {
    const activitiesForSet = getMockData();

    setActivities(activitiesForSet);
    setTotalActivitiesContext(activitiesForSet.length);
    setIsCompletedActivitiesContext(
      new Array(activitiesForSet.length).fill(false)
    );
  }, []);

  return (
    <>
      <CongratsComponent
        totalActivities={totalActivitiesContext}
        activitiesCompleted={totalCompletedActivitiesContext}
      />
      <Typography variant="h3" component={'h1'} css={innerClasse.titleStyles}>
        e-Learning Apps
      </Typography>
      <header css={innerClasse.headerStyles}>
        <ProfileComponent />
      </header>

      <main>
        <article css={innerClasse.podArticleStyle}>
          {activities.map((activity, index) => (
            <section key={index} css={innerClasse.podSectionsStyle}>
              {getActivity(activity, index)}
            </section>
          ))}
        </article>
      </main>
    </>
  );
};
