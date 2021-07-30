import React from "react";
import { render, screen } from "@testing-library/react";
import SectionCount from "../SectionCount";
import { abbreviateNumber } from "../../../../../utility/NumberUtility";
import AppTheme from "../../../../../AppTheme";
import {
  checkConsoleSpyOnResult,
  makeSpyOnConsole,
} from "../../../../../utility/testUtility/ConsoleTestUtitlity";

describe("Count Section", () => {
  const mediaCount = 100000;
  const follower = 200000;
  const following = 300000;

  beforeEach(() => {
    makeSpyOnConsole();

    render(
      <AppTheme>
        <SectionCount
          mediaCount={mediaCount}
          followerCount={follower}
          followingCount={following}
        />
      </AppTheme>
    );
  });

  afterEach(() => {
    checkConsoleSpyOnResult();
  });

  test("Checks the DOMs", () => {
    expect(screen.getByText("posts")).toBeInTheDocument();
    expect(screen.getByText("follower")).toBeInTheDocument();
    expect(screen.getByText("following")).toBeInTheDocument();
  });

  test("Checks the DOMs' abbreviated content", () => {
    expect(screen.getByText(abbreviateNumber(mediaCount))).toBeInTheDocument();
    expect(screen.getByText(abbreviateNumber(follower))).toBeInTheDocument();
    expect(screen.getByText(abbreviateNumber(following))).toBeInTheDocument();
  });
});
