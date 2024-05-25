import { PayloadAction, createSlice } from "@reduxjs/toolkit";

// Define a type for the slice state
interface CounterState {
  counter: number;
}

// Define the initial state using that type
const initialState: CounterState = {
  counter: 0,
};

export const sitemap = createSlice({
  name: "sitemap",
  initialState,
  reducers: {
    increaseCounter: (state) => {
      state.counter += 1;
    },
  },
});

export const SitemapAction = sitemap.actions;

export const SitemapReducer = sitemap.reducer;
