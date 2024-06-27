import { ActivitiesContextProvider } from '@/core/providers/activities/activitiesContext.provider';
import { ActivitiesPod } from '@/pods/activities.pod';

export const HomeScene: React.FC = () => {
  return (
    <>
      <ActivitiesContextProvider>
        <ActivitiesPod />;
      </ActivitiesContextProvider>
    </>
  );
};
