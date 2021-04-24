import React, { useCallback } from 'react';
import styled from 'styled-components';
import { useHistory } from 'react-router-dom';
import { useAuth } from '../contexts/AuthProvider';
import Background from './input/Background';
import Button from './input/Button';
import Label from './input/Label';
import Form from './Form';
import LinkButton from './input/LinkButton';

const FirstGroup = styled(Form.Group)`
  margin-bottom: 28px;
`;

const SignUp = () => {
  const { currentUser, signOut } = useAuth();
  const history = useHistory();

  const handleUpdateProfile = useCallback(() => {
    history.push('/update-profile');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleSignOut = useCallback(async () => {
    await signOut();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <Form>
        <Form.Title>DASHBOARD</Form.Title>
        <FirstGroup>
          <Label>EMAIL: {currentUser.email}</Label>
        </FirstGroup>
        <Form.Group>
          <Button onClick={handleUpdateProfile}>UPDATE PASSWORD</Button>
          <LinkButton onClick={handleSignOut}>Sign out</LinkButton>
        </Form.Group>
      </Form>
    </Background>
  );
};

export default SignUp;
