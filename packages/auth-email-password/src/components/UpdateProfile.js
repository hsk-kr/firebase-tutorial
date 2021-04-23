import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import Background from './input/Background';
import Button from './input/Button';
import Link from './input/Link';
import Form from './Form';

const UpdateProfile = () => {
  const history = useHistory();

  const handleUpdateProfile = useCallback((e) => {
    e.preventDefault();
    history.push('/dashboard');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <Form onSubmit={handleUpdateProfile}>
        <Form.Title>UPDATE PROFILE</Form.Title>
        <Form.Group>
          <Form.Label>EMAIL</Form.Label>
          <Form.Inputbox disabled value="test@gmail.com" />
        </Form.Group>
        <Form.Group>
          <Form.Label>NEW PASSWORD</Form.Label>
          <Form.Inputbox type="password" />
        </Form.Group>
        <Form.Group>
          <Form.Label>CONFIRMATION</Form.Label>
          <Form.Inputbox type="password" />
        </Form.Group>
        <Form.Group>
          <Button type="submit">UPDATE</Button>
          <Link linkText="Back to Dashboard" href="/dashboard" />
        </Form.Group>
      </Form>
    </Background>
  );
};

export default UpdateProfile;
