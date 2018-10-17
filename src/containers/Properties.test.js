import React from "react";
import { render, cleanup } from "react-testing-library";
import Properties from "./Properties";

describe("<Properties />", () => {
  const { debug, getByTestId } = render(<Properties />);

  debug();

  test("Renders results and saved columns", () => {
    expect(getByTestId("results-col"));
    expect(getByTestId("saved-col"));
  });
});
