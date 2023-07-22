import { configureStore } from "@reduxjs/toolkit";
import { setupListeners } from "@reduxjs/toolkit/dist/query";
import { movieApi } from "./listing/movieApi";
import listingReducer from "./listing/listingSlice";
import searchReducer from "./search/searchSlich";

export const store = configureStore({
  reducer: {
    listingReducer,
    searchReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({}).concat([movieApi.middleware]),
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;