import React from "react";
import { render } from "react-dom";
import App from "./App";

const mount = (el) => {
  render(<App />, el);
};

if (process.env.NODE_ENV === "development") {
  const container = document.getElementById("foo-root");
  if (container) mount(container);
}

export { mount };
