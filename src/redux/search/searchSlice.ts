import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type SearchStateTypes = {
  searchResultBy: number;
};

const initialState = {
  searchResultBy: 1,
} as SearchStateTypes;

export const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResultBy: (state, action: PayloadAction<number>) => {
      state.searchResultBy = action.payload;
    },
  },
});

export const { setSearchResultBy } = searchSlice.actions;

export default searchSlice.reducer;
