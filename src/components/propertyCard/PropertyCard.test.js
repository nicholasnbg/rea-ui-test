import React from "react";
import { render, fireEvent, wait } from "react-testing-library";
import PropertyCard from "./PropertyCard";

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

const clickFunction = jest.fn();

describe("<PropertyCard />", () => {
  const { getByTestId, getByText, container } = render(
    <PropertyCard
      property={property}
      type={"saved"}
      buttonClick={clickFunction}
    />
  );

  test("that things render", () => {
    expect(getByTestId("property-price").textContent).toBe(property.price);
    expect(getByTestId("property-image").getAttribute("src")).toBe(
      property.mainImage
    );
    expect(getByText("Remove Property"));
  });

  test("that onClick functions are called", async () => {
    fireEvent.click(container.querySelector(".pc-button"));

    await wait(() => {
      expect(clickFunction).toHaveBeenCalled();
    });
  });
});
