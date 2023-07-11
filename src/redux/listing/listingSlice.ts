import { createSlice } from "@reduxjs/toolkit";


type ListingState = {
  filter: {
    sortBy: string
  }
}

const initialState = {
  filter: {
    sortBy: ""
  }
} as ListingState;

export const listingSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    filter: (state, action) => {
      state.filter = action.payload;
    }
  }
})

export const {filter} = listingSlice.actions;

export default listingSlice.reducer;