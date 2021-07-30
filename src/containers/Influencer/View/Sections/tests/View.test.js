import React from "react";
import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import configureStore from "redux-mock-store";
import View from "../../View";
import AppTheme from "../../../../../AppTheme";
import { data } from "../../../../../utility/tests/TestData";
import {
  makeSpyOnConsole,
  checkConsoleSpyOnResult,
} from "../../../../../utility/tests/ConsoleTestUtitlity";
import { setInfluencerViewData } from "../../../../../store/slice/InfluencerViewSlice";
import { abbreviateNumber } from "../../../../../utility/NumberUtility";

const mockStore = configureStore([]);

describe("Info Section", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      influencerView: {
        data: data[0],
      },
    });

    store.dispatch = jest.fn();

    makeSpyOnConsole();
  });

  afterEach(() => {
    checkConsoleSpyOnResult();
  });

  test("Checks the DOMs", () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <View />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByText("posts")).toBeInTheDocument();
    expect(screen.getByText("follower")).toBeInTheDocument();
    expect(screen.getByText("following")).toBeInTheDocument();

    expect(screen.getByTitle("Influencer Profile Image")).toBeInTheDocument();

    expect(screen.getAllByRole("heading")).toHaveLength(2);

    expect(screen.getByTestId("bio-testid")).toBeInTheDocument();
    expect(screen.getByTestId("ch-dis-name-testid")).toBeInTheDocument();
    expect(screen.getByTestId("ch-name-testid")).toBeInTheDocument();
  });

  test("Checks the setInfluencerViewData action result", async () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <View />
        </AppTheme>
      </Provider>
    );

    await store.dispatch(setInfluencerViewData(data[0]));

    expect(screen.getByText(data[0].channel_display_name)).toBeInTheDocument();
    expect(screen.getByText(`@${data[0].channel_name}`)).toBeInTheDocument();
    expect(
      screen.getByText(abbreviateNumber(data[0].follower_count))
    ).toBeInTheDocument();
    expect(
      screen.getByText(abbreviateNumber(data[0].following_count))
    ).toBeInTheDocument();
  });
});
