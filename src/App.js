import './App.css';
import React, { useEffect, useState } from 'react';

import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from 'react-router-dom';
import { ThemeProvider } from 'styled-components';
import { theme, GlobalStyle } from './containers/common/AppStyle';
import Header from './components/Header';
import Dashboard from './containers/DashboardPage';
import Project from './containers/ProjectPage';
import ComposeProvider from './context/ComposeProvider';
import Resource from './containers/ResourcePage';
import ProtectedRoute from './utils/ProtectedRoute';
import Login from './containers/LoginPage';

function App() {
  const [, setLoading] = useState(true);
  const [loggined, setLoggined] = useState(false);
  useEffect(() => {
    setLoading(false);
    const token = localStorage.getItem('token');
    if (token) {
      setLoggined(true);
    }
  }, [loggined]);
  const handleOnSuccessLogin = () => {
    setLoggined(true);
  };
  return (
    <ThemeProvider theme={theme}>
      <ComposeProvider>
        <GlobalStyle />
        <Router>
          <Header loggedIn={loggined} />
          <Switch>
            <Redirect from="/" to="/dashboard" exact />
            <ProtectedRoute
              path="/dashboard"
              component={Dashboard}
              loggedIn={loggined}
              default
            />
            <ProtectedRoute
              path="/project"
              component={Project}
              loggedIn={loggined}
            />
            <ProtectedRoute
              path="/resource"
              component={Resource}
              loggedIn={loggined}
            />
            <Route
              path="/login"
              component={() => (
                <Login
                  handleLoggin={handleOnSuccessLogin}
                  loggedIn={loggined}
                ></Login>
              )}
            />
          </Switch>
        </Router>
      </ComposeProvider>
    </ThemeProvider>
  );
}

export default App;
