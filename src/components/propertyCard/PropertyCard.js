import React, { Component } from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import CardHeader from "./CardHeader";
import CardImage from "./CardImage";
import { OverlayButton } from "./CardOverlay";

class PropertyCard extends Component {
  state = {
    visible: true,
    cardTimeouts: {
      results: 100,
      saved: 300
    }
  };

  onCardButtonClick = id => {
    const { type } = this.props;
    const timeout = this.state.cardTimeouts[type];
    if (type === "saved") {
      this.setState({
        visible: false
      });
      setTimeout(() => {
        this.props.buttonClick(id);
      }, timeout);
    } else {
      setTimeout(() => {
        this.props.buttonClick(id);
      }, timeout);
    }
  };

  render() {
    const { property, type } = this.props;
    const { logo } = property.agency;
    const backgroundColor = property.agency.brandingColors.primary;
    const { price, mainImage } = property;

    const overlayButton = (
      <OverlayButton
        onClick={() => this.onCardButtonClick(property.id)}
        green={type === "results"}
        danger={type === "saved"}
      >
        {type === "saved" ? "Remove Property" : "Add Property"}
      </OverlayButton>
    );

    return (
      <CardWrapper className={"property-card"} visible={this.state.visible}>
        <CardHeader backgroundColor={backgroundColor} logoImage={logo} />
        <CardImage button={overlayButton} propertyImage={mainImage} />
        <Price data-testid="property-price">{price}</Price>
      </CardWrapper>
    );
  }
}

PropertyCard.propTypes = {
  property: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  buttonClick: PropTypes.func
};

export default PropertyCard;

const CardWrapper = styled.div`
  display: grid;
  grid-template-rows: 45px 370px 90px;
  max-height: 500px;
  max-width: 600px;
  justify-content: space-between;
  border-radius: 5px;
  box-shadow: 0 0.125em 0.25em rgba(0, 0, 0, 0.2);
  margin: 20px 0;
  transition: all 0.3s ease-in;
  opacity: ${props => (props.visible ? 1 : 0)};
`;

const Price = styled.div`
  height: 100%;
  display: flex;
  padding: 0.5rem 1rem;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
`;
