import { configureStore } from "@reduxjs/toolkit";
import { movieApi } from "./listing/movieApi";
import { setupListeners } from "@reduxjs/toolkit/query";
import listingReducer from "./listing/listingSlice";

export const store = configureStore({
  reducer: {
    listingReducer,
    [movieApi.reducerPath]: movieApi.reducer,
  },
  devTools: true,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(movieApi.middleware)
});

setupListeners(store.dispatch);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
