interface switchRoutes {
  root: string;
  activities: string;
}

export const switchRoutes: switchRoutes = {
  root: '/',
  activities: '/activities',
};

interface Routes extends switchRoutes {}

export const routes: Routes = {
  ...switchRoutes,
};
