import influencerReducer, { getInfluencers } from "../influencerSlice";
import data from "../../../utility/tests/TestData";

const initialState = {
  influencers: [],
  isLoading: false,
  error: null,
};

describe("Influencer Slice", () => {
  test("Checks the initial state", () => {
    expect(influencerReducer(undefined, {})).toEqual(initialState);
  });

  test("Checks the loading true when getInfluencers is pending", () => {
    const action = { type: getInfluencers.pending.type };
    const state = influencerReducer(initialState, action);

    expect(state).toEqual({ influencers: [], isLoading: true, error: null });
  });

  test("Checks the loading and the influencers when getInfluencers is fulfilled", () => {
    const action = {
      type: getInfluencers.fulfilled.type,
      payload: data,
    };
    const state = influencerReducer(initialState, action);

    expect(state).toEqual({ influencers: data, isLoading: false, error: null });
  });

  test("Checks the loading false and the error when getInfluencers is rejected", () => {
    const action = {
      type: getInfluencers.rejected.type,
      payload: { error: "some error" },
    };
    const state = influencerReducer(initialState, action);

    expect(state).toEqual({
      influencers: [],
      isLoading: false,
      error: { error: "some error" },
    });
  });
});
