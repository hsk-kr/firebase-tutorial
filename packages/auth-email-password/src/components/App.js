import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

// Components
import Login from './Login';
import SignUp from './SignUp';
import Dashboard from './Dashboard';
import UpdateProfile from './UpdateProfile';

const App = () => {
  return (
    <Router>
      <Switch>
        <Route path="/" exact component={Login} />
        <Route path="/login" exact component={Login} />
        <Route path="/signup" exact component={SignUp} />
        <Route path="/dashboard" exact component={Dashboard} />
        <Route path="/update-profile" exact component={UpdateProfile} />
      </Switch>
    </Router>
  );
};

export default App;
