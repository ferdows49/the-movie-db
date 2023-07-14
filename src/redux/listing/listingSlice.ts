import { PayloadAction, createSlice } from "@reduxjs/toolkit";

type ListingState = {
  isFilterParams: boolean;
  filterUrl: string;
  filterParams: {
    sortBy: string;
    releaseFromDate: Date | null;
    releaseToDate: Date | null;
    genres: number[];
    language: string;
    userScore: number[];
    minimumVots: number | number[];
    runtime: number[];
    keyword: string;
  };
};

const initialState = {
  isFilterParams: false,
  filterUrl: "",
  filterParams: {
    sortBy: "",
    releaseFromDate: "",
    releaseToDate: "",
    genres: [],
    language: "",
    userScore: [],
    minimumVots: 0,
    runtime: [],
    keyword: "",
  },
} as unknown as ListingState;

export const listingSlice = createSlice({
  name: "movies",
  initialState,
  reducers: {
    sortResultBy: (state, action: PayloadAction<string>) => {
      state.filterParams.sortBy = action.payload;
    },
    filterByReleaseFromDate: (state, action: PayloadAction<Date | null>) => {
      state.filterParams.releaseFromDate = action.payload;
    },
    filterByReleaseToDate: (state, action: PayloadAction<Date | null>) => {
      state.filterParams.releaseToDate = action.payload;
    },
    filterByGenres: (state, action: PayloadAction<number[]>) => {
      state.filterParams.genres = action.payload;
    },
    filterByLanguage: (state, action: PayloadAction<string>) => {
      state.filterParams.language = action.payload;
    },
    filterByUserScore: (state, action: PayloadAction<number[]>) => {
      state.filterParams.userScore = action.payload;
    },
    filterByMinimumVots: (state, action: PayloadAction<number | number[]>) => {
      state.filterParams.minimumVots = action.payload;
    },
    filterByRuntime: (state, action: PayloadAction<number[]>) => {
      state.filterParams.runtime = action.payload;
    },
    filterByKeyWoard: (state, action: PayloadAction<string>) => {
      state.filterParams.keyword = action.payload;
    },
    filterBy: (state, action: PayloadAction<string>) => {
      state.isFilterParams = true;
      state.filterUrl = action.payload;
    },
    clearFilter: (state) => {
      state.isFilterParams = false;
      state.filterUrl = "";
      state.filterParams = initialState.filterParams;
    },
  },
});

export const {
  sortResultBy,
  filterByReleaseFromDate,
  filterByReleaseToDate,
  filterByGenres,
  filterByLanguage,
  filterByUserScore,
  filterByMinimumVots,
  filterByRuntime,
  filterByKeyWoard,
  filterBy,
  clearFilter,
} = listingSlice.actions;

export default listingSlice.reducer;
