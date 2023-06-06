import { ThemeProvider } from '@emotion/react';
import './App.css';
import { LandingPage } from './components/LandingPage/LandingPage';
import theme from '../theme';
import { CoursesPage } from './components/CoursesPage/CoursesPage';
import { ProfessionalPage } from './components/ProfessionalsPage/ProfessionalPage';
import { CareerPage } from './components/CareerCenterdPage/CareerPage';
import { ForStudentsPage } from './components/ForStudentsPage/ForStudentsPage';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <LandingPage />
      <CoursesPage />
      <ProfessionalPage />
      <CareerPage />
      <ForStudentsPage />
    </ThemeProvider>
  );
}

export default App;
