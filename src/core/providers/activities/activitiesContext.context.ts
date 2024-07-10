import React from 'react';

import { ActivityContextModel } from './activitiesContext.model';

export const ActivityContext = React.createContext<ActivityContextModel>({
  userNameInput: '',
  avatarToShow: 0,
  totalActivitiesContext: 0,
  isCompletedActivitiesContext: [],
  totalCompletedActivitiesContext: 0,
  setUserNameInput: () => {},
  setAvatarToShow: () => {},
  setTotalActivitiesContext: () => {},
  setIsCompletedActivitiesContext: () => {},
});
