import React, { useCallback } from 'react';
import { useHistory } from 'react-router-dom';
import styled from 'styled-components';
import Background from './input/Background';
import Button from './input/Button';
import Label from './input/Label';
import Form from './Form';
import LinkButton from './input/LinkButton';

const FirstGroup = styled(Form.Group)`
  margin-bottom: 28px;
`;

const SignUp = () => {
  const history = useHistory();

  const handleUpdateProfile = useCallback(() => {
    history.push('/update-profile');
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Background>
      <Form>
        <Form.Title>DASHBOARD</Form.Title>
        <FirstGroup>
          <Label>EMAIL: test@gmail.com</Label>
        </FirstGroup>
        <Form.Group>
          <Button onClick={handleUpdateProfile}>UPDATE PASSWORD</Button>
          <LinkButton to="/login">Sign out</LinkButton>
        </Form.Group>
      </Form>
    </Background>
  );
};

export default SignUp;
