import { createSlice } from "@reduxjs/toolkit";

const influencerViewSlice = createSlice({
  name: "influencerView",
  initialState: {
    data: {},
  },
  reducers: {
    setInfluencerViewData(state, action) {
      state.data = action.payload;
    },
  },
});

export const { setInfluencerViewData } = influencerViewSlice.actions;

export default influencerViewSlice.reducer;
