import React from "react";
import styled from "styled-components";
import PropertyCard from "./propertyCard/PropertyCard";
import PropTypes from "prop-types";
import { emptyMessageBuilder } from "../utilities/emptyMessage";

const PropertiesColumn = ({ properties, heading, type, buttonClick }) => {
  const emptyMessage = emptyMessageBuilder(type);

  const propertiesMap = properties.map(property => (
    <PropertyCard
      key={property.id}
      property={property}
      type={type}
      buttonClick={buttonClick}
    />
  ));

  return (
    <Column className={"column"}>
      <h2 data-testid="column-heading">{heading}</h2>
      {properties.length === 0 ? emptyMessage : propertiesMap}
    </Column>
  );
};

PropertiesColumn.propTypes = {
  properties: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  buttonClick: PropTypes.func
};

export default PropertiesColumn;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  text-align: center;
  margin-top: 20px;
`;
