import reducer, { setInfluencerViewData } from "../InfluencerViewSlice";
import { data } from "../../../utility/tests/TestData";

const initialState = {
  data: {},
};

describe("Influencer View Slice", () => {
  test("Checks the initial state", () => {
    expect(reducer(undefined, {})).toEqual(initialState);
  });

  test("Checks data being added to store", () => {
    expect(reducer(initialState, setInfluencerViewData(data[0]))).toEqual({
      data: data[0],
    });
  });

  test("Checks the data replacement", () => {
    const previousState = { data: data[0] };
    expect(reducer(previousState, setInfluencerViewData(data[1]))).toEqual({
      data: data[1],
    });
  });
});
