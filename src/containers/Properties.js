import React, { Component } from "react";
import resultsData from "../data/property-data";
import styled from "styled-components";
import PropertiesColumn from "../components/PropertiesColumn";


class Properties extends Component {
  state = {
    results: resultsData.results,
    saved: resultsData.saved
  };

  render() {
    return (
      <PropertiesWrapper>
        <PropertiesColumn properties={this.state.results} heading={"Results"} />
        <PropertiesColumn properties={this.state.saved} heading={"Saved"} />
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
