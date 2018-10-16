import React from "react";
import styled from "styled-components";
import PropertyCard from "../components/PropertyCard";

const Results = ({ properties }) => {
  return (
    <Column>
      <h2>Results</h2>
      {properties.map(property => (
        <PropertyCard property={property} />
      ))}
    </Column>
  );
};

export default Results;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  height: auto;
  text-align: center;
`;
