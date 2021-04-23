import React from 'react';
import styled from 'styled-components';
import Label from './input/Label';
import Inputbox from './input/Inputbox';

const Wrapper = styled.form`
  width: 330px;
  border-radius: 8px;
  background-color: #fff;
  padding: 23px 35px 34px 35px;
`;

const Title = styled.h2`
  font-family: 'Cabin Condensed', sans-serif;
  letter-spacing: 2.4px;
  font-size: 24px;
  margin: 0px;
  margin-bottom: 28px;
  text-align: center;
`;

const Form = ({ children, ...rest }) => {
  return <Wrapper {...rest}>{children}</Wrapper>;
};

Form.Title = ({ children, ...rest }) => {
  return <Title {...rest}>{children}</Title>;
};

Form.Group = styled.div`
  display: flex;
  flex-direction: column;
  row-gap: 16px;
  margin-bottom: 22px;

  &:last-child {
    margin-bottom: 0px;
  }
`;

Form.Inputbox = Inputbox;

Form.Label = Label;

export default Form;
