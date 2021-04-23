import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  column-gap: 7px;
  font-family: 'Noto Sans', sans-serif;
  font-size: 12px;
  letter-spacing: 1.2px;
`;

const LinkComponent = ({ labelText, linkText, href }) => {
  return (
    <Wrapper>
      <span>{labelText}</span>
      <Link to={href}>{linkText}</Link>
    </Wrapper>
  );
};

export default LinkComponent;
