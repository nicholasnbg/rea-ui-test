import React from "react";
import styled from "styled-components";
import PropertyCard from "../components/PropertyCard";

const PropertiesColumn = ({ properties, heading, type }) => {
  return (
    <Column>
      <h2>{heading}</h2>
      {properties.map(property => (
        <PropertyCard property={property} type={type} />
      ))}
    </Column>
  );
};

export default PropertiesColumn;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  text-align: center;
`;
