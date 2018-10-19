import React from "react";
import { SaveButton, RemoveButton } from "./propertyCard/CardOverlay";

export const buttonBuilder = (type, propertyId, onClick) => {
  let button;
  if (type === "results") {
    button = (
      <SaveButton className={"pc-button"} onClick={() => onClick(propertyId)}>
        Add Property
      </SaveButton>
    );
  } else if (type === "saved") {
    button = (
      <RemoveButton className={"pc-button"} onClick={() => onClick(propertyId)}>
        Remove Property
      </RemoveButton>
    );
  }
  return button;
};
