import React from "react";
import {
  SaveButton,
  RemoveButton
} from "../components/propertyCard/CardOverlay";

export const buttonBuilder = (type, propertyId, onClick) => {
  let button;
  switch (type) {
    case "results":
      button = (
        <SaveButton className={"pc-button"} onClick={() => onClick(propertyId)}>
          Add Property{" "}
        </SaveButton>
      );
      break;
    case "saved":
      button = (
        <RemoveButton
          className={"pc-button"}
          onClick={() => onClick(propertyId)}
        >
          Remove Property{" "}
        </RemoveButton>
      );
      break;
    default:
      button = null;
  }

  return button;
};
