import React, { useState, useRef, useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';

// Components
import Background from './input/Background';
import Button from './input/Button';
import Link from './input/Link';
import Form from './Form';

const SignUp = () => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const history = useHistory();
  const { signUp } = useAuth();

  const handleSignUp = useCallback(async (e) => {
    e.preventDefault();
    const { value: email } = emailRef.current;
    const { value: password } = passwordRef.current;
    const { value: passwordConfirm } = passwordConfirmRef.current;

    try {
      setErrMsg('');
      setLoading(true);

      if (email.trim() === '' || password.trim() === '') {
        throw new Error('Enter email and password.');
      }

      if (password !== passwordConfirm) {
        throw new Error('Passwords are different.');
      }

      await signUp(email, password);
      history.push('/dashboard');
    } catch (e) {
      setErrMsg(e.message);
      setLoading(false);
    } // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <Form onSubmit={handleSignUp}>
        <Form.Title>SIGN UP</Form.Title>
        <Form.Group>
          <Form.Label>EMAIL</Form.Label>
          <Form.Inputbox ref={emailRef} />
        </Form.Group>
        <Form.Group>
          <Form.Label>PASSWORD</Form.Label>
          <Form.Inputbox type="password" ref={passwordRef} />
        </Form.Group>
        <Form.Group>
          <Form.Label>CONFIRMATION</Form.Label>
          <Form.Inputbox type="password" ref={passwordConfirmRef} />
          {errMsg && <Form.Alert>{errMsg}</Form.Alert>}
        </Form.Group>
        <Form.Group>
          <Button type="submit" disabled={loading}>
            SIGN UP
          </Button>
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
