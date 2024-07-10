export interface ActivityContextModel {
  userNameInput: string;
  avatarToShow: number;
  totalActivitiesContext: number;
  isCompletedActivitiesContext: (boolean | null)[];
  totalCompletedActivitiesContext: number;
  setUserNameInput: React.Dispatch<React.SetStateAction<string>>;
  setAvatarToShow: React.Dispatch<React.SetStateAction<number>>;
  setTotalActivitiesContext: React.Dispatch<React.SetStateAction<number>>;
  setIsCompletedActivitiesContext: React.Dispatch<
    React.SetStateAction<(boolean | null)[]>
  >;
}
