import React from 'react';
import { PropsWithChildren } from 'react';

import { ActivityContext } from './activitiesContext.context';

interface Props extends PropsWithChildren {}

export const ActivitiesContextProvider: React.FC<Props> = props => {
  const { children } = props;

  const [totalActivities, setTotalActivities] = React.useState(0);

  const [isCompletedActivities, setIsCompletedActivities] = React.useState<
    boolean[]
  >([]);
  const [totalCompletedActivities, setTotalCompletedActivities] =
    React.useState(0);

  React.useEffect(() => {
    const newCompletedActivities = isCompletedActivities.filter(
      activity => activity === true
    ).length;

    setTotalCompletedActivities(newCompletedActivities);
  }, [isCompletedActivities]);

  return (
    <>
      <ActivityContext.Provider
        value={{
          totalActivities,
          isCompletedActivities,
          totalCompletedActivities,
          setTotalActivities,
          setIsCompletedActivities,
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
