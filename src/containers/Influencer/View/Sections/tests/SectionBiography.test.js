import React from "react";
import { render, screen } from "@testing-library/react";
import SectionBiography from "../SectionBiography";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../../../utility/testUtility/ConsoleTestUtitlity";

describe("Biography Section", () => {
  beforeEach(() => {
    makeSpyOnConsole();
  });

  afterEach(() => {
    checkConsoleSpyOnResult();
  });

  test("Checks the text", () => {
    const text = "sample text";
    render(<SectionBiography text={text} />);

    expect(screen.getByText(text)).toBeInTheDocument();
  });
});
