import React from "react";
import Component from "./component";
import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

test("focus flow", () => {
  render(<Component />);
  expect(document.activeElement).toBe(document.body);

  /* could use react-testing-library utilities for query components in a reat app  */
  userEvent.tab();
  expect(document.activeElement).toBe(document.getElementById("one"));
  userEvent.tab();
  expect(document.activeElement).toBe(document.getElementById("three"));
});
