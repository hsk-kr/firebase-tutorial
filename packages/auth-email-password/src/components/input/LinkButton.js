import styled from 'styled-components';

const LinkButton = styled.span`
  display: block;
  font-family: 'Noto Sans', sans-serif;
  font-size: 18px;
  letter-spacing: 1.8px;
  color: #0645ad;
  text-align: center;
  cursor: pointer;
  transition: opacity 0.25s;

  &:hover {
    opacity: 0.6;
  }
`;

LinkButton.defaultProps = {
  role: 'button',
};

export default LinkButton;
