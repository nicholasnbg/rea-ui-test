import React from "react";
import styled from "styled-components";

const PropertyCard = ({ property }) => {
  const agency = property.agency;

  const backgroundColor = agency.brandingColors.primary;
  const logoImage = agency.logo;
  const { price } = property;
  const propertyImage = property.mainImage;

  return (
    <CardWrapper>
      <CardHeader background={backgroundColor}>
        <Logo src={logoImage} />
      </CardHeader>
      <ImageWrapper>
        <MainImage data-testid="property-image" src={propertyImage} />
      </ImageWrapper>
      <Price data-testid="property-price">{price}</Price>
    </CardWrapper>
  );
};

export default PropertyCard;

const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: 40px 370px 90px;
  max-height: 500px;
  width: 100%;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.2);
  margin: 20px 0;
`;

const CardHeader = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
  height: 40px;
  border-radius: 5px 5px 0 0;
  background-color: ${props => props.background || "#f3f3f3"};
`;

const ImageWrapper = styled.div`
  height: auto;
  width: 100%;
`;

const MainImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Logo = styled.img``;

const Price = styled.div`
  height: 100%;
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
