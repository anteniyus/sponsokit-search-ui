import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import AppTheme from "../../../../AppTheme";
import List from "../List";
import store from "../../../../store/store";
import { GetInfluencers } from "../../service/InfluencerService";
import { data } from "../../../../utility/tests/TestData";
import { getInfluencers } from "../../../../store/slice/influencerSlice";

jest.mock("../../service/InfluencerService");
const mockStore = configureStore([]);

describe("Influencer List", () => {
  let appStore;
  beforeEach(() => {
    appStore = mockStore({
      influencers: {
        influencers: [],
        isLoading: false,
        error: null,
      },
    });

    appStore.dispatch = jest.fn();
  });

  test("Checks the DOMs", () => {
    render(
      <Provider store={appStore}>
        <AppTheme>
          <List />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByText("Rows per page:")).toBeInTheDocument();
    expect(screen.getByText("0-0 of 0")).toBeInTheDocument();
  });

  test("Checks the table headers", () => {
    render(
      <Provider store={appStore}>
        <AppTheme>
          <List />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByText("Channel Name")).toBeInTheDocument();
    expect(screen.getByText("Channel Display Name")).toBeInTheDocument();
    expect(screen.getByText("Media Count")).toBeInTheDocument();
    expect(screen.getByText("Follower Count")).toBeInTheDocument();
  });

  test("Checks the application initiation dispatch", () => {
    render(
      <Provider store={appStore}>
        <AppTheme>
          <List />
        </AppTheme>
      </Provider>
    );

    expect(appStore.dispatch).toHaveBeenCalledTimes(0);
  });

  test("Checks the submit dispatch", async () => {
    render(
      <Provider store={appStore}>
        <AppTheme>
          <List />
        </AppTheme>
      </Provider>
    );

    fireEvent.click(screen.getByText("Submit"));

    expect(appStore.dispatch).toHaveBeenCalledTimes(1);
  });

  test("Checks the getInfluencers action result", async () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <List />
        </AppTheme>
      </Provider>
    );

    GetInfluencers.mockImplementationOnce(() => Promise.resolve(data));
    await store.dispatch(getInfluencers());

    data.forEach((item) =>
      expect(screen.getByText(item.channel_display_name)).toBeInTheDocument()
    );
  });
});
