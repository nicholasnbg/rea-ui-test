import React from "react";
import styled from "styled-components";

export const emptyMessageBuilder = type => {
  let emptyMessageText;

  switch (type) {
    case "results":
      emptyMessageText = "Sorry, no results found...";
      break;
    case "saved":
      emptyMessageText = "Looks like you haven't save any properties yet...";
      break;
    default:
      emptyMessageText = null;
  }

  const emptyMessage = (
    <EmptyMessage className="empty-message"> {emptyMessageText} </EmptyMessage>
  );

  return emptyMessage;
};

const EmptyMessage = styled.span`
  margin-top: 50px;
  font-size: 1.65rem;
`;
