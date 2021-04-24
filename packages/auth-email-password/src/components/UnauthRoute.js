import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const UnauthRoute = (props) => {
  const { currentUser } = useAuth();

  if (currentUser) return <Redirect to="/dashboard" />;

  return <Route {...props} />;
};

export default UnauthRoute;
