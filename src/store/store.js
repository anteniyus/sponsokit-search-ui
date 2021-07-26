import { configureStore } from "@reduxjs/toolkit";
import influencerSlice from "./slice/influencerSlice";

export default configureStore({
  reducer: {
    influencers: influencerSlice.reducer,
  },
});
