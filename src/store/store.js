import { configureStore } from "@reduxjs/toolkit";
import influencerReducer from "./slice/influencerSlice";
import influencerViewReducer from "./slice/InfluencerViewSlice";

export default configureStore({
  reducer: {
    influencers: influencerReducer,
    influencerView: influencerViewReducer,
  },
});
