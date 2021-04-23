import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Background from './input/Background';
import Button from './input/Button';
import Link from './input/Link';
import Form from './Form';

const Login = () => {
  const history = useHistory();

  const handleLogin = useCallback((e) => {
    e.preventDefault();
    history.push('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <Form onSubmit={handleLogin}>
        <Form.Title>SIGN IN</Form.Title>
        <Form.Group>
          <Form.Label>EMAIL</Form.Label>
          <Form.Inputbox />
        </Form.Group>
        <Form.Group>
          <Form.Label>PASSWORD</Form.Label>
          <Form.Inputbox type="password" />
        </Form.Group>
        <Form.Group>
          <Button type="submit">LOGIN</Button>
          <Link labelText="No Account?" linkText="Create One!" href="/signup" />
        </Form.Group>
      </Form>
    </Background>
  );
};

export default Login;
