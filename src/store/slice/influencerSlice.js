import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { GetInfluencers } from "../../containers/Influencer/service/InfluencerService";

export const getInfluencers = createAsyncThunk("characters", (data) =>
  GetInfluencers(data)
);

const influencerSlice = createSlice({
  name: "characters",
  initialState: {
    influencers: [],
    isLoading: false,
    error: null,
  },
  reducers: {},
  extraReducers: {
    [getInfluencers.pending]: (state) => {
      state.isLoading = true;
    },
    [getInfluencers.fulfilled]: (state, action) => {
      state.influencers = action.payload;
      state.isLoading = false;
    },
    [getInfluencers.rejected]: (state, action) => {
      state.influencers = [];
      state.error = action.payload.error;
      state.isLoading = false;
    },
  },
});

export default influencerSlice;
