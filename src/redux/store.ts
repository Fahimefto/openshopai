import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/query";
import { useDispatch } from "react-redux";
import { SitemapReducer } from "./feature/web/demo-slice";

export const makeStore = () => {
  return configureStore({
    reducer: {
      sitemap: SitemapReducer,
    },
    devTools: process.env.NODE_ENV !== "production",
  });
};

setupListeners(makeStore);

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore["getState"]>;
export type AppDispatch = AppStore["dispatch"];
export const useDispatchTyped: () => AppDispatch = useDispatch;
