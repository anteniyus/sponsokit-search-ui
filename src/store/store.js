import { configureStore } from "@reduxjs/toolkit";
import influencerSlice from "./slice/influencerSlice";
import influencerViewReducer from "./slice/InfluencerViewSlice";

export default configureStore({
  reducer: {
    influencers: influencerSlice.reducer,
    influencerView: influencerViewReducer,
  },
});
