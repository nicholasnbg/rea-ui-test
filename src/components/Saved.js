import React from "react";
import styled from "styled-components";
import PropertyCard from "./PropertyCard";

const Saved = ({ properties }) => {
  return (
    <Column>
      <h2>Saved</h2>
      {properties.map(property => (
        <PropertyCard property={property} />
      ))}
    </Column>
  );
};

export default Saved;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  text-align: center;
`;
