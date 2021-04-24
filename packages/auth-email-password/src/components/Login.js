import React, { useState, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import Background from './input/Background';
import Button from './input/Button';
import Link from './input/Link';
import Form from './Form';

const Login = () => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const { signIn } = useAuth();
  const history = useHistory();
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleLogin = useCallback(async (e) => {
    e.preventDefault();

    const { value: email } = emailRef.current;
    const { value: password } = passwordRef.current;

    try {
      setErrMsg('');
      setLoading(true);

      if (email.trim() === '' || password.trim() === '') {
        throw new Error('Enter email and password.');
      }

      await signIn(email, password);
      history.push('/dashboard');
    } catch (e) {
      setErrMsg(e.message);
      setLoading(false);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <Form onSubmit={handleLogin}>
        <Form.Title>SIGN IN</Form.Title>
        <Form.Group>
          <Form.Label>EMAIL</Form.Label>
          <Form.Inputbox ref={emailRef} />
        </Form.Group>
        <Form.Group>
          <Form.Label>PASSWORD</Form.Label>
          <Form.Inputbox type="password" ref={passwordRef} />
          {errMsg && <Form.Alert>{errMsg}</Form.Alert>}
        </Form.Group>
        <Form.Group>
          <Button type="submit" disabled={loading}>
            LOGIN
          </Button>
          <Link labelText="No Account?" linkText="Create One!" href="/signup" />
        </Form.Group>
      </Form>
    </Background>
  );
};

export default Login;
