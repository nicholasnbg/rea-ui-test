import React from "react";
import { render, cleanup } from "react-testing-library";
import Properties from "./Properties";

describe("<Properties />", () => {
  const { debug, getByTestId, container } = render(<Properties />);

  test("Renders results and saved columns", () => {
    expect(container.querySelectorAll(".column").length).toBe(2);
  });
});
