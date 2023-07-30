"use client";

import React, { useEffect } from "react";
import MediaNav from "./MediaNav";
import { useDispatch } from "react-redux";
import { setMediaDetailsData } from "@/src/redux/media-details/mediaDetailsSlice";
import {
  CreditsDataPropsType,
  ExternalIdsPropsType,
  MediaDetailsPropsType,
  VideosDataPropsType,
} from "./media-types/MediaDetailsTypes";

const MovieDetails = ({
  movieDetailsData,
  creditsData,
  videosData,
  externalIdsData,
}: {
  movieDetailsData: MediaDetailsPropsType;
  creditsData: CreditsDataPropsType;
  videosData: VideosDataPropsType;
  externalIdsData: ExternalIdsPropsType;
}) => {
  console.log("movieDetailsData", movieDetailsData);
  console.log("creditsData", creditsData);
  console.log("videosData", videosData);
  console.log("externalIdsData", externalIdsData);

  const dispatch = useDispatch();

  useEffect(() => {
    if (movieDetailsData || creditsData || videosData || externalIdsData) {
      let data = {
        mediaDetailsData: movieDetailsData,
        creditsData,
        videosData,
        externalIdsData,
      };
      dispatch(setMediaDetailsData(data));
    }
  }, [movieDetailsData, creditsData, videosData, externalIdsData]);

  return <MediaNav />;
};

export default MovieDetails;
