import React, { Component } from "react";
import styled from "styled-components";

class PropertyCard extends Component {
  state = {
    hovered: false
  }


  onHover = () => {
    const { hovered } = this.state
    this.setState({
      hovered: hovered ? false : true
    })

  }

  render() {
    const { property, type } = this.props
    const agency = property.agency;
    const backgroundColor = agency.brandingColors.primary;
    const logoImage = agency.logo;
    const { price } = property;
    const propertyImage = property.mainImage;

    let overlayButton;
    if (type === 'results') {
      overlayButton = <SaveButton>Add Property +</SaveButton>
    } else if (type === 'saved') {
      overlayButton = <RemoveButton>Remove Property -</RemoveButton>
    } else {
      return null
    }


    return (
      <CardWrapper
        onMouseEnter={console.log('entered')}
        onMouseLeave={console.log('left')}
      >
        <CardHeader background={backgroundColor}>
          <Logo src={logoImage} />
        </CardHeader>
        <ImageWrapper>
          <Overlay>
            {overlayButton}
          </Overlay>
          <MainImage data-testid="property-image" src={propertyImage} />
        </ImageWrapper>
        <Price data-testid="property-price">{price}</Price>
      </CardWrapper>
    );
  }
};

export default PropertyCard;

/*Styled Componenets */

const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: 45px 370px 90px;
  max-height: 500px;
  max-width: 600px;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.2);
  margin: 20px 0;
`;

const CardHeader = styled.div`
  display: flex;
  padding-left: 10px;
  align-items: center;
  height: 100%;
  border-radius: 5px 5px 0 0;
  background-color: ${props => props.background || "#f3f3f3"};
`;

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

const Logo = styled.img``;

const Price = styled.div`
  height: 100%;
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;


const Overlay = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  padding: 10%;
  background: rgba(0, 0, 0, 0.5);
  opacity: 0;
  height: 100%;
  width: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 0; 
  bottom:0;
  z-index: 2;
  transition: all 0.2s ease-out;
  &:hover {
    top: 0;
    opacity: 1;
  }
  `;

const Button = styled.button`
  padding: 10px 15px;
  font-size: 1.5rem;
  border-radius: 10px;
  transition: all 0.1s linear;
  border: 0;
  &:focus {
    outline: none;
  }
  &:hover {
    cursor: pointer; 
  }
`;

const SaveButton = styled(Button)`
  background: #6CA468;
  color: rgb(255, 255, 255);
  &:hover {
    background: #4F784C;
  }
`;

const RemoveButton = styled(Button)`
  background: #e4002b;
  color: rgb(255, 255, 255);
  &:hover {
    background: #a30000;
  }
`