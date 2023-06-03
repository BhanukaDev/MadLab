import { ThemeProvider } from '@emotion/react';
import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';
import theme from '../theme';
import { CoursesPage } from './components/CoursesPage/CoursesPage';
import { ProfessionalPage } from './components/ProfessionalsPage/ProfessionalPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
      <CoursesPage />
      <ProfessionalPage />
    </ThemeProvider>
  );
}

export default App;
