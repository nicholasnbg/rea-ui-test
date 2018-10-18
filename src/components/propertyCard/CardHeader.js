import React from 'react'
import styled from "styled-components";


const CardHeader = ({ backgroundColor, logoImage }) => {
  return (
    <CardHead background={backgroundColor}>
      <Logo src={logoImage} />
    </CardHead>
  )
}

export default CardHeader

const CardHead = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
  height: 100%;
  border-radius: 5px 5px 0 0;
  background-color: ${props => props.background || "#f3f3f3"};
`;

const Logo = styled.img`
  border-radius: 5px;
`;