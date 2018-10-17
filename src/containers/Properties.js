import React, { Component } from "react";
import resultsData from "../data/property-data";
import styled from "styled-components";
import PropertiesColumn from "../components/PropertiesColumn";

class Properties extends Component {
  state = {
    results: resultsData.results,
    saved: resultsData.saved
  };

  saveProperty = id => {
    const { results, saved } = this.state;
    const resultIndex = results.map(result => result.id).indexOf(id);
    const property = results[resultIndex];

    const isDuplicate = saved.map(result => result.id).indexOf(id) !== -1;
    const newSaved = isDuplicate ? saved : [...saved, property];

    this.setState({
      results: results,
      saved: newSaved
    });
  };

  unsaveProperty = id => {
    const { saved } = this.state;
    const removeIndex = saved.map(result => result.id).indexOf(id);
    saved.splice(removeIndex, 1);

    this.setState({
      saved: saved
    });
  };

  render() {
    return (
      <PropertiesWrapper>
        <PropertiesColumn
          data-testid="results-col"
          properties={this.state.results}
          heading={"Results"}
          type={"results"}
          buttonClick={this.saveProperty}
        />
        <PropertiesColumn
          data-testid="saved-col"
          properties={this.state.saved}
          heading={"Saved"}
          type={"saved"}
          buttonClick={this.unsaveProperty}
        />
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
  background: #f0f2f5;
`;
