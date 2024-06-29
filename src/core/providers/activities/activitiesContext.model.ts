export interface ActivityContextModel {
  totalActivitiesContext: number;
  isCompletedActivitiesContext: (boolean | null)[];
  totalCompletedActivitiesContext: number;
  setTotalActivitiesContext: React.Dispatch<React.SetStateAction<number>>;
  setIsCompletedActivitiesContext: React.Dispatch<
    React.SetStateAction<(boolean | null)[]>
  >;
}
