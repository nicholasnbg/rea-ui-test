import React from 'react'
import styled from "styled-components";


const CardOverlay = ({ button }) => {
  return (
    <Overlay>
      {button}
    </Overlay>
  )
}

export default CardOverlay


const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 5%;
  background: rgba(0, 0, 0, 0.4);
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 2;
  transition: all 0.2s ease-out;
  &:hover {
    opacity: 1;
  }
`;