import React from 'react';

import { ActivityContextModel } from './activitiesContext.model';

export const ActivityContext = React.createContext<ActivityContextModel>({
  totalActivities: 0,
  isCompletedActivities: [],
  totalCompletedActivities: 0,
  setTotalActivities: () => {},
  setIsCompletedActivities: () => {},
});
