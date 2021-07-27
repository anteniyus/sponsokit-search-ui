import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import AppTheme from "../../../../AppTheme";
import List from "../List";

const mockStore = configureStore([]);

describe("Influencer List", () => {
  let store;
  beforeEach(() => {
    store = mockStore({
      influencers: {
        influencers: [],
        isLoading: false,
        error: null,
      },
    });

    store.dispatch = jest.fn();
  });

  test("Checks the DOMs", () => {
    render(
      <Provider store={store}>
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
      <Provider store={store}>
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
      <Provider store={store}>
        <AppTheme>
          <List />
        </AppTheme>
      </Provider>
    );

    expect(store.dispatch).toHaveBeenCalledTimes(0);
  });

  test("Checks the submit dispatch", async () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <List />
        </AppTheme>
      </Provider>
    );

    fireEvent.click(screen.getByText("Submit"));

    expect(store.dispatch).toHaveBeenCalledTimes(1);
  });
});
