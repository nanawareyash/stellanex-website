import { configureStore } from "@reduxjs/toolkit";

import { AppReducer } from "./slices/appSlice";

export const store = configureStore({
  reducer: {
    app: AppReducer,
  },
});
