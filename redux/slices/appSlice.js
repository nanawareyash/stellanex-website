import { createSlice } from "@reduxjs/toolkit";

const appSlice = createSlice({
  name: "app",
  initialState: {
    activePage: 1,
  },
  reducers: {
    setActivePage: (state, actions) => {
      state.activePage = actions.payload;
    },
  },
});

export const { setActivePage } = appSlice.actions;
export const AppReducer = appSlice.reducer;
