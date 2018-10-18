import React from "react";
import { render, cleanup } from "react-testing-library";
import Properties from "./Properties";

afterEach(cleanup);

describe("<Properties />", () => {
  const { container } = render(<Properties />);

  test("Renders results and saved columns", () => {
    expect(container.querySelectorAll(".column").length).toBe(2);
  });
});
