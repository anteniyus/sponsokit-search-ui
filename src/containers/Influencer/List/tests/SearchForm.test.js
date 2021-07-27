import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import configureStore from "redux-mock-store";
import { Provider } from "react-redux";
import AppTheme from "../../../../AppTheme";
import SearchForm from "../SearchForm";

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
  });

  test("Checks the DOMs", () => {
    render(
      <Provider store={store}>
        <AppTheme>
          <SearchForm />
        </AppTheme>
      </Provider>
    );

    expect(screen.getByText("Search Form")).toBeInTheDocument();
    expect(screen.getByLabelText("Text Field")).toBeInTheDocument();
    expect(screen.getByText("Count range")).toBeInTheDocument();
    expect(
      screen.getByText("(Min: 50,000 - Max: 800,000)")
    ).toBeInTheDocument();
    expect(screen.getAllByRole("slider")).toHaveLength(2);
    expect(screen.getByText("Submit")).toBeInTheDocument();
  });

  test("Checks the input value", () => {
    const rendered = render(
      <Provider store={store}>
        <AppTheme>
          <SearchForm />
        </AppTheme>
      </Provider>
    );

    const input = rendered.getByLabelText("Text Field");

    fireEvent.change(input, { target: { value: "test" } });

    expect(input.value).toBe("test");
  });
});
