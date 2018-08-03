import React from "react";
import { css } from "emotion";

const AppContainer = props => {
  const page_container = css`
    margin: 0;
    padding: 0;
    font-family: sans-serif;
  `;

  return <div className={page_container}>{props.children}</div>;
};

export default AppContainer;
