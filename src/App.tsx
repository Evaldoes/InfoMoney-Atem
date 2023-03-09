import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import NavBar from './components/NavBar';
import GlobalStyle from './styles/globals';

import AppRoutes from './routes';
import AppProvider from './hooks';

const App: React.FC = () => {
  return (
    <Router>
      <AppProvider>
        <NavBar />
        <AppRoutes />
        <GlobalStyle />
      </AppProvider>
    </Router>
  );
};

export default App;
