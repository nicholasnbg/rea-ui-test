import styled from 'styled-components'

const Button = styled.button`
  padding: 10px 15px;
  font-size: 1.5rem;
  border-radius: 5px;
  transition: all 0.1s linear;
  border: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer;
  }
`;

export const SaveButton = styled(Button)`
  background: #6ca468;
  color: rgb(255, 255, 255);
  &:hover {
    background: #4f784c;
  }
`;

export const RemoveButton = styled(Button)`
  background: #e4002b;
  color: rgb(255, 255, 255);
  &:hover {
    background: #a30000;
  }
`;

