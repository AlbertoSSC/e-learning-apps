export interface ActivityContextModel {
  totalActivities: number;
  isCompletedActivities: boolean[];
  totalCompletedActivities: number;
  setTotalActivities: React.Dispatch<React.SetStateAction<number>>;
  setIsCompletedActivities: React.Dispatch<React.SetStateAction<boolean[]>>;
}
