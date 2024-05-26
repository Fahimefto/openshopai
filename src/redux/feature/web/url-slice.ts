import { SiteMapElement } from "@/lib/sitemap";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type Document = {
  title?: string;
  description?: string;
  url?: string;
  keywords?: string;
};

interface InitState {
  counter: number;
  urls: SiteMapElement[];
  document: Document[];
}

const initialState: InitState = {
  counter: 0,
  urls: [],
  document: [],
};

export const url = createSlice({
  name: "urls",
  initialState,
  reducers: {
    increaseCounter: (state) => {
      state.counter += 1;
    },
    setUrls: (state, action: PayloadAction<SiteMapElement[]>) => {
      state.urls = action.payload;
    },
    addUrls: (state, action: PayloadAction<SiteMapElement[]>) => {
      state.urls = state.urls.concat(action.payload);
    },
    resetUrls: (state) => {
      state.urls = [];
    },
  },
});

export const UrlSliceAction = url.actions;

export const UrlSliceReducer = url.reducer;
