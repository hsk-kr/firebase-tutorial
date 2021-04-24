import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

const AuthRoute = (props) => {
  const { currentUser } = useAuth();

  if (!currentUser) return <Redirect to="/login" />;

  return <Route {...props} />;
};

export default AuthRoute;
