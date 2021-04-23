import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Background from './input/Background';
import Button from './input/Button';
import Link from './input/Link';
import Form from './Form';

const SignUp = () => {
  const history = useHistory();

  const handleSignUp = useCallback((e) => {
    e.preventDefault();
    history.push('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <Form onSubmit={handleSignUp}>
        <Form.Title>SIGN UP</Form.Title>
        <Form.Group>
          <Form.Label>EMAIL</Form.Label>
          <Form.Inputbox />
        </Form.Group>
        <Form.Group>
          <Form.Label>PASSWORD</Form.Label>
          <Form.Inputbox type="password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>CONFIRMATION</Form.Label>
          <Form.Inputbox type="password" />
        </Form.Group>
        <Form.Group>
          <Button type="submit">SIGN UP</Button>
          <Link
            labelText="Already have an account?"
            linkText="Log in"
            href="/login"
          />
        </Form.Group>
      </Form>
    </Background>
  );
};

export default SignUp;
