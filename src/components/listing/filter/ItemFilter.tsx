"use client";

import React from "react";
import { Card, CardContent, Box, Button, Divider } from "@mui/material";
import SortBy from "./SortBy";
import ReleaseDate from "./ReleaseDate";
import Geners from "./Genres";
import Language from "./Language";
import UserScore from "./UserScore";
import MinimumVotes from "./MinimumVotes";
import RunTime from "./RunTime";
import Keywords from "./Keywords";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { UrlConfig } from "@/src/config/UrlConfig";
import {
  useGetFilteredDataQuery,
  useGetLanguagesQuery,
} from "@/src/redux/listing/movieApi";
import axios from "axios";
import { ApiService } from "@/src/config/ApiService";
import { clearFilter, filterBy } from "@/src/redux/listing/listingSlice";

type PropsType = {
  setCurrentData: any;
  setLoading: any;
};

const ItemFilter = ({ setCurrentData, setLoading }: PropsType) => {
  const filterParams = useAppSelector(
    (state) => state.listingReducer.filterParams
  );

  const dispatch = useAppDispatch();

  const handleClear = () => {
    dispatch(clearFilter());
  };

  const handleSearch = async () => {
    let params = "";

    for (const key in filterParams) {
      if (key === "sortBy" && filterParams[key]) {
        params += `sort_by=${filterParams[key]}&`;
      } else if (key === "releaseFromDate" && filterParams[key]) {
        params += `release_date.gte=${filterParams[key]}&`;
      } else if (key === "releaseToDate" && filterParams[key]) {
        params += `release_date.lte=${filterParams[key]}&`;
      } else if (
        key === "genres" &&
        Object.keys(filterParams[key]).length !== 0
      ) {
        params += `with_genres=${filterParams[key].join(",")}&`;
      } else if (key === "language" && filterParams[key]) {
        params += `with_original_language=${filterParams[key]}&`;
      } else if (
        key === "userScore" &&
        Object.keys(filterParams[key]).length !== 0
      ) {
        params += `vote_average.gte=${filterParams[key][0]}&vote_average.lte=${filterParams[key][1]}&`;
      } else if (key === "minimumVots" && filterParams[key]) {
        params += `vote_count.gte=${filterParams[key]}&`;
      } else if (
        key === "runtime" &&
        Object.keys(filterParams[key]).length !== 0
      ) {
        params += `with_runtime.gte=${filterParams[key][0]}&with_runtime.lte=${filterParams[key][1]}&`;
      } else if (key === "keyword" && filterParams[key]) {
        params += `with_keywords=${filterParams[key]}&`;
      }
    }

    if (params) {
      setLoading(true);

      const url = `${UrlConfig.BASE_URL}${ApiService.GET_FILTERED_DATA}?${params}api_key=${UrlConfig.API_KEY}`;
      const response = await axios.get(url);
      const data = await response.data;
      setCurrentData(data);

      setLoading(false);

      dispatch(filterBy(params));
    }
  };

  return (
    <Card>
      <CardContent>
        <SortBy />

        <Divider sx={{ marginTop: "14px", marginBottom: "10px" }} />

        <ReleaseDate />

        <Divider sx={{ marginTop: "14px", marginBottom: "10px" }} />

        <Geners />

        <Divider sx={{ marginTop: "14px", marginBottom: "10px" }} />

        <Language />

        <Divider sx={{ marginTop: "14px", marginBottom: "10px" }} />

        <UserScore />

        <Divider sx={{ marginTop: "14px", marginBottom: "10px" }} />

        <MinimumVotes />

        <Divider sx={{ marginTop: "14px", marginBottom: "10px" }} />

        <RunTime />

        <Divider sx={{ marginTop: "14px", marginBottom: "10px" }} />

        <Keywords />

        <Box className="flex flex-row justify-center items-center mt-4">
          <Button variant="outlined" onClick={handleClear}>
            Clear
          </Button>
          <Button
            variant="contained"
            sx={{
              marginLeft: "8px",
              backgroundColor: "#01B4E4 !important",
              "&:hover": {
                backgroundColor: "#032541 !important",
              },
            }}
            onClick={handleSearch}
          >
            Search
          </Button>
        </Box>
      </CardContent>
    </Card>
  );
};

export default ItemFilter;
