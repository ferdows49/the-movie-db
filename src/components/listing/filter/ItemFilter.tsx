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
import { sortResultBy } from "@/src/redux/listing/listingSlice";
import { useAppDispatch } from "@/src/redux/hooks";

const ItemFilter = () => {

  const handleClear = () => {};

  const handleSearch = () => {};

  return (
    <Card>
      <CardContent>
        <SortBy />

        <Divider sx={{marginTop: "14px", marginBottom: "10px"}} />

        <ReleaseDate />

        <Divider sx={{marginTop: "14px", marginBottom: "10px"}} />

        <Geners />

        <Divider sx={{marginTop: "14px", marginBottom: "10px"}} />

        <Language />

        <Divider sx={{marginTop: "14px", marginBottom: "10px"}} />

        <UserScore />

        <Divider sx={{marginTop: "14px", marginBottom: "10px"}} />

        <MinimumVotes />

        <Divider sx={{marginTop: "14px", marginBottom: "10px"}} />

        <RunTime />

        <Divider sx={{marginTop: "14px", marginBottom: "10px"}} />

        <Keywords />

        <Box className="flex flex-row justify-center items-center mt-4">
          <Button variant="outlined" onClick={handleClear}>
            Clear
          </Button>
          <Button
            variant="contained"
            sx={{
              marginLeft: "8px",
              backgroundColor: '#01B4E4 !important',
              '&:hover': {
                backgroundColor: '#032541 !important',
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
