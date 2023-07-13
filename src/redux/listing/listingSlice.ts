import { PayloadAction, createAction, createEntityAdapter, createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";


type ListingState = {
  isFilterParams: boolean,
  filterParams: {
    sortBy: string,
    releaseFromDate: Date | null,
    releaseToDate: Date | null
  }
}

const initialState = {
  isFilterParams: false,
  filterParams: {
    sortBy: "",
    releaseFromDate: "",
    releaseToDate: ""
  }
} as unknown as ListingState;

export const listingSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    sortResultBy: (state, action: PayloadAction<string>) => {
      state.filterParams.sortBy = action.payload;
    },
    releaseFromDate: (state, action: PayloadAction<Date | null>) => {
      state.filterParams.releaseFromDate = action.payload;
    },
    releaseToDate: (state, action: PayloadAction<Date | null>) => {
      state.filterParams.releaseToDate = action.payload;
    }
  }
})

export const {sortResultBy, releaseFromDate, releaseToDate} = listingSlice.actions;

// export const sortRangeBy = (state: RootState) => state.listingReducer.filterParams.sortBy;
// export const releaseFromDate = (state: RootState) => state.listingReducer.filterParams.releaseFromDate;
// export const  releaseToDate = (state: RootState) => state.listingReducer.filterParams.releaseToDate;

export default listingSlice.reducer;