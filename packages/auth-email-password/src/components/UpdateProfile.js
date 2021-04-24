import React, { useState, useRef, useCallback } from 'react';
import { useAuth } from '../contexts/AuthProvider';
import Background from './input/Background';
import Button from './input/Button';
import Link from './input/Link';
import Form from './Form';

const UpdateProfile = () => {
  const [loading, setLoading] = useState(false);
  const [errMsg, setErrMsg] = useState('');
  const [message, setMessage] = useState('');
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();
  const { currentUser, updatePassword } = useAuth();

  const handleUpdateProfile = useCallback(
    async (e) => {
      e.preventDefault();

      const { value: password } = passwordRef.current;
      const { value: passwordConfirm } = passwordConfirmRef.current;

      try {
        setMessage('');
        setErrMsg('');
        setLoading(true);

        if (password !== passwordConfirm) {
          throw new Error('Passwords are different.');
        }

        await updatePassword(password);

        passwordRef.current.value = '';
        passwordConfirmRef.current.value = '';
        setMessage('Password has been changed.');
      } catch (e) {
        setErrMsg(e.message);
      } finally {
        setLoading(false);
      }
    },
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [updatePassword]
  );

  return (
    <Background>
      <Form onSubmit={handleUpdateProfile}>
        <Form.Title>UPDATE PROFILE</Form.Title>
        <Form.Group>
          <Form.Label>EMAIL</Form.Label>
          <Form.Inputbox disabled value={currentUser.email} />
        </Form.Group>
        <Form.Group>
          <Form.Label>NEW PASSWORD</Form.Label>
          <Form.Inputbox type="password" ref={passwordRef} />
        </Form.Group>
        <Form.Group>
          <Form.Label>CONFIRMATION</Form.Label>
          <Form.Inputbox type="password" ref={passwordConfirmRef} />
          {errMsg && <Form.Alert>{errMsg}</Form.Alert>}
          {message && <Form.Success>{message}</Form.Success>}
        </Form.Group>
        <Form.Group>
          <Button type="submit" disabled={loading}>
            UPDATE
          </Button>
          <Link linkText="Back to Dashboard" href="/dashboard" />
        </Form.Group>
      </Form>
    </Background>
  );
};

export default UpdateProfile;
