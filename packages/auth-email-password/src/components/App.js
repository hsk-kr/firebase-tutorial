import React from 'react';
import { BrowserRouter as Router, Switch } from 'react-router-dom';
import AuthProvider from '../contexts/AuthProvider';

// Components
import AuthRoute from './AuthRoute';
import UnauthRoute from './UnauthRoute';
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import UpdateProfile from './UpdateProfile';

const App = () => {
  return (
    <Router>
      <Switch>
        <AuthProvider>
          <AuthRoute path="/" exact component={Login} />
          <UnauthRoute path="/login" exact component={Login} />
          <UnauthRoute path="/signup" exact component={SignUp} />
          <AuthRoute path="/dashboard" exact component={Dashboard} />
          <AuthRoute path="/update-profile" exact component={UpdateProfile} />
        </AuthProvider>
      </Switch>
    </Router>
  );
};

export default App;
