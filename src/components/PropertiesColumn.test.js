import React from "react";
import { render, cleanup } from "react-testing-library";
import PropertiesColumn from "./PropertiesColumn";

afterEach(cleanup);

describe("<PropertiesColumn />", () => {
  const props = {
    properties: [],
    heading: "Test"
  };

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

  const { getByTestId, rerender, container } = render(
    <PropertiesColumn
      properties={props.properties}
      heading={props.heading}
      type={"saved"}
    />
  );

  test("Renders headings", () => {
    expect(getByTestId("column-heading").textContent).toBe(props.heading);
  });
  test("empty properties renders empty message", () => {
    expect(container.querySelector(".empty-message"));
  });

  props.properties.push(property);

  test("renders a property card", () => {
    rerender(
      <PropertiesColumn
        properties={props.properties}
        heading={props.heading}
        type={"saved"}
      />
    );
    expect(container.querySelectorAll(".property-card").length).toBe(1);
  });
});
