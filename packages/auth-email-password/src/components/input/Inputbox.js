import styled from 'styled-components';

const Inputbox = styled.input`
  border: 1px solid #1b0e0e;
  border-radius: 4px;
  height: 40px;
  font-size: 24px;
  font-family: 'Lexend Deca', sans-serif;
  box-sizing: border-box;
  padding-left: 12px;
  padding-right: 12px;
`;

Inputbox.defaultProps = {
  type: 'text',
};

export default Inputbox;
