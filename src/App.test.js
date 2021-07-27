import React from "react";
import { render, screen } from "@testing-library/react";
import App from "./App";

test("Checks the header DOM", () => {
  render(<App />);
  expect(screen.getByText("Sponsokit Influencer Finder")).toBeInTheDocument();
});
