import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetInfluencers } from "../../containers/Influencer/service/InfluencerService";

export const getInfluencers = createAsyncThunk("influencers", (data) =>
  GetInfluencers(data)
);

const influencerSlice = createSlice({
  name: "influencers",
  initialState: {
    influencers: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getInfluencers.pending]: (state) => {
      state.isLoading = true;
      state.influencers = [];
    },
    [getInfluencers.fulfilled]: (state, action) => {
      state.influencers = action.payload;
      state.isLoading = false;
    },
    [getInfluencers.rejected]: (state, action) => {
      state.influencers = [];
      state.error = action.payload;
      state.isLoading = false;
    },
  },
});

export default influencerSlice.reducer;
