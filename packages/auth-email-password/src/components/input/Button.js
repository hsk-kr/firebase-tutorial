import styled from 'styled-components';

const Button = styled.button`
  border-radius: 4px;
  background-color: #2a2b37;
  color: #fff;
  font-family: 'Lexend Deca', sans-serif;
  font-size: 18px;
  letter-spacing: 1.8px;
  border-width: 0px;
  height: 38px;
  cursor: pointer;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.9;
  }
`;

Button.defaultProps = {
  type: 'button',
};

export default Button;
