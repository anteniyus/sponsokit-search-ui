import React from "react";
import { render, screen } from "@testing-library/react";
import { data } from "../../../../../utility/tests/TestData";
import SectionInfo from "../SectionInfo";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../../../utility/tests/ConsoleTestUtitlity";

describe("Info Section", () => {
  beforeEach(() => {
    makeSpyOnConsole();
  });

  afterEach(() => {
    checkConsoleSpyOnResult();
  });

  test("Checks the DOMs", () => {
    render(
      <SectionInfo
        channelDisplayName={data[0].channel_display_name}
        channelName={data[0].channel_name}
      />
    );

    expect(screen.getByText(data[0].channel_display_name)).toBeInTheDocument();
    expect(screen.getByText(`@${data[0].channel_name}`)).toBeInTheDocument();

    expect(screen.getAllByRole("heading")).toHaveLength(2);
  });
});
