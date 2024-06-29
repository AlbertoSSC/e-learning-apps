import React from 'react';

import { ActivityContextModel } from './activitiesContext.model';

export const ActivityContext = React.createContext<ActivityContextModel>({
  totalActivitiesContext: 0,
  isCompletedActivitiesContext: [],
  totalCompletedActivitiesContext: 0,
  setTotalActivitiesContext: () => {},
  setIsCompletedActivitiesContext: () => {},
});
