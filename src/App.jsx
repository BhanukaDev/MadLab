import { ThemeProvider } from '@emotion/react';
import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';
import theme from '../theme';
import { CoursesPage } from './components/CoursesPage/CoursesPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
      <CoursesPage />
    </ThemeProvider>
  );
}

export default App;
