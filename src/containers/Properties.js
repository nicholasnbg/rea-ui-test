import React, { Component } from "react";
import resultsData from "../data/property-data";
import styled from "styled-components";
import Saved from "../components/Saved";
import Results from "../components/Results";

class Properties extends Component {
  state = {
    results: resultsData.results,
    saved: resultsData.saved
  };

  render() {
    return (
      <PropertiesWrapper>
        <Results properties={this.state.results} />
        <Saved properties={this.state.saved} />
      </PropertiesWrapper>
    );
  }
}

export default Properties;

const PropertiesWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 40px;
  padding: 0 15%;
`;
