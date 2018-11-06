import styled, { css } from "styled-components";

export const Button = styled.button`
  bottom: 0;
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

  ${props =>
    props.green &&
    css`
      background: #6ca468;
      color: rgb(255, 255, 255);
      &:hover {
        background: #4f784c;
      }
    `} ${props =>
    props.danger &&
    css`
      background: #e4002b;
      color: rgb(255, 255, 255);
      &:hover {
        background: #a30000;
      }
    `};
`;
