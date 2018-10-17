import React from "react";
import { render, cleanup, fireEvent } from "react-testing-library";
import PropertiesColumn from "./PropertiesColumn";

describe("<PropertiesColumn /> with empty properties array", () => {
  const props = {
    properties: [],
    heading: "Test"
  };
  const { debug, getByTestId } = render(
    <PropertiesColumn
      properties={props.properties}
      heading={props.heading}
      type={"saved"}
    />
  );
  // debug();
  test("Renders headings", () => {
    expect(getByTestId("column-heading").textContent).toBe(props.heading);
  });
  test("empty properties renders empty message", () => {
    expect(getByTestId("empty-message"));
  });
});

describe("<PropertiesColumn /> with non-empty properties array", () => {
  cleanup();
  const property = {
    price: "$826,500",
    agency: {
      brandingColors: {
        primary: "#57B5E0"
      },
      logo: "http://i1.au.reastatic.net/agencylogo/XCEWIN/12/20150807093203.gif"
    },
    id: "3",
    mainImage:
      "http://i4.au.reastatic.net/640x480/98cee1b2a3a64329921fc38f7e2926a78d41fcc683fc48fb8a8ef2999b14c027/main.jpg"
  };
  const propsWithProperty = {
    properties: [property],
    heading: "Test"
  };
  const { debug, queryByTestId, getByTestId } = render(
    <PropertiesColumn
      properties={propsWithProperty.properties}
      heading={propsWithProperty.heading}
      type={"saved"}
    />
  );
  // debug();
  test("renders property card", () => {
    expect(queryByTestId("empty-message"));
  });
});
