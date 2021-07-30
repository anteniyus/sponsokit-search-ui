import React from "react";
import { render, screen } from "@testing-library/react";
import AppTheme from "../../../../../AppTheme";
import SectionImage from "../SectionImage";
import { data } from "../../../../../utility/testUtility/TestData";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../../../utility/testUtility/ConsoleTestUtitlity";

describe("Image Section", () => {
  beforeEach(() => {
    makeSpyOnConsole();
  });

  afterEach(() => {
    checkConsoleSpyOnResult();
  });

  test("Checks the DOMs", () => {
    render(
      <AppTheme>
        <SectionImage mediaURL={data[0].media_url} />
      </AppTheme>
    );

    expect(screen.getByTitle("Influencer Profile Image")).toBeInTheDocument();
  });
});
