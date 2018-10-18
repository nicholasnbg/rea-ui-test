import React from "react";
import styled from "styled-components";
import CardOverlay from "./CardOverlay";

const CardImage = ({ button, propertyImage }) => {
  return (
    <ImageWrapper>
      <CardOverlay button={button} />
      <MainImage data-testid={"property-image"} src={propertyImage} />
    </ImageWrapper>
  );
};

export default CardImage;

const ImageWrapper = styled.div`
  height: auto;
  width: 100%;
  position: relative;
  overflow: hidden;
`;

const MainImage = styled.img`
  width: 100%;
  max-height: 100%;
`;
