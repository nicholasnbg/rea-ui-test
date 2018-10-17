import React from "react";
import styled from "styled-components";
import PropertyCard from "../components/PropertyCard";
import PropTypes from 'prop-types'

const PropertiesColumn = ({ properties, heading, type, buttonClick }) => {
  let emptyMessageText;
  if (type === "results") {
    emptyMessageText = "Sorry, no results found..."
  } else if (type === "saved") {
    emptyMessageText = "Looks like you haven't save any properties yet..."
  }

  const emptyMessage = (
    <EmptyMessage>{emptyMessageText}</EmptyMessage>
  )

  const propertiesMap = (properties
    .map(property => (
      <PropertyCard key={property.id} property={property} type={type} buttonClick={buttonClick} />
    )))

  return (
    <Column>
      <h2>{heading}</h2>
      {properties.length === 0 ? emptyMessage : propertiesMap}
    </Column>
  );
};

PropertiesColumn.propTypes = {
  properties: PropTypes.array.isRequired,
  heading: PropTypes.string.isRequired,
  buttonClick: PropTypes.func
}

export default PropertiesColumn;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  height: auto;
  text-align: center;
  margin-top: 20px;
`;

const EmptyMessage = styled.span`
  margin-top: 50px;
  font-size: 1.65rem;
`
