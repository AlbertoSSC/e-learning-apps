import React from 'react';
import { PropsWithChildren } from 'react';

import { ActivityContext } from './activitiesContext.context';

interface Props extends PropsWithChildren {}

export const ActivitiesContextProvider: React.FC<Props> = props => {
  const { children } = props;

  const [totalActivitiesContext, setTotalActivitiesContext] = React.useState(0);

  const [isCompletedActivitiesContext, setIsCompletedActivitiesContext] =
    React.useState<(boolean | null)[]>([]);

  const [totalCompletedActivitiesContext, settotalCompletedActivitiesContext] =
    React.useState(0);

  React.useEffect(() => {
    const newCompletedActivities = isCompletedActivitiesContext.filter(
      activity => activity === true
    ).length;

    settotalCompletedActivitiesContext(newCompletedActivities);
  }, [isCompletedActivitiesContext]);

  return (
    <>
      <ActivityContext.Provider
        value={{
          totalActivitiesContext,
          isCompletedActivitiesContext,
          totalCompletedActivitiesContext,
          setTotalActivitiesContext,
          setIsCompletedActivitiesContext,
        }}
      >
        {children}
      </ActivityContext.Provider>
    </>
  );
};

export const useActivitiesContext = () => {
  const context = React.useContext(ActivityContext);

  if (context === null) {
    throw 'useMyContext: looks like you have forgotten to add the provider on top of the app';
  }

  return context;
};
