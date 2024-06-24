import { ThemeProvider } from '@mui/material';

import { HomeScene } from './scenes/home.scene';

import { CenteredLayout } from './styles/layouts';
import theme from './styles/themes/customMUI.theme';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <CenteredLayout>
        <HomeScene />
      </CenteredLayout>
    </ThemeProvider>
  );
}

export default App;
