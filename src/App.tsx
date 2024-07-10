import { ThemeProvider } from '@mui/material';

import { ActivitiesContextProvider, AppRouter } from './core';

import { CenteredLayout } from './styles/layouts';
import theme from './styles/themes/customMUI.theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CenteredLayout>
        <ActivitiesContextProvider>
          <AppRouter />
        </ActivitiesContextProvider>
      </CenteredLayout>
    </ThemeProvider>
  );
}

export default App;
