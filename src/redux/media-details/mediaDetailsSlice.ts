import {
  CreditsDataPropsType,
  ExternalIdsPropsType,
  MediaDetailsPropsType,
  VideosDataPropsType,
} from "@/src/components/details/media-types/MediaDetailsTypes";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type MediaDetailsPayloadActionType = {
  mediaDetailsData: MediaDetailsPropsType;
  creditsData: CreditsDataPropsType;
  videosData: VideosDataPropsType;
  externalIdsData: ExternalIdsPropsType;
};

type mediaDetailsStateType = {
  mediaDetailsData: MediaDetailsPropsType;
  creditsData: CreditsDataPropsType;
  videosData: VideosDataPropsType;
  externalIdsData: ExternalIdsPropsType;
};

const initialState = {
  mediaDetailsData: {},
  creditsData: {},
  videosData: {},
  externalIdsData: {},
} as mediaDetailsStateType;

export const mediaDetailsSlice = createSlice({
  name: "mediaDetails",
  initialState,
  reducers: {
    setMediaDetailsData: (
      state,
      action: PayloadAction<MediaDetailsPayloadActionType>
    ) => {
      state.mediaDetailsData = action.payload.mediaDetailsData;
      state.creditsData = action.payload.creditsData;
      state.videosData = action.payload.videosData;
      state.externalIdsData = action.payload.externalIdsData;
    },
  },
});

export const { setMediaDetailsData } = mediaDetailsSlice.actions;

export default mediaDetailsSlice.reducer;
