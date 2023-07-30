import React from "react";
import { Chip, ListItemButton, Typography } from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/src/redux/hooks";
import { setSearchResultBy } from "@/src/redux/search/searchSlice";

type PropsType = {
  title: string;
  resultNumber: number;
  indexNumber: number;
};

const SearchSIdebarListButton = ({
  title,
  resultNumber,
  indexNumber,
}: PropsType) => {
  const searchResultBy: number = useAppSelector(
    (state) => state.searchReducer.searchResultBy
  );

  const dispatch = useAppDispatch();
  
  return (
    <ListItemButton
      sx={{
        backgroundColor:
          searchResultBy === indexNumber ? "#EBEBEB !important" : "transparent",
        fontWeight: searchResultBy === indexNumber ? 600 : 400,
        "&:hover": {
          backgroundColor: "#EBEBEB !important",
        },
        display: "flex",
        justifyContent: "space-between",
      }}
      selected={searchResultBy === indexNumber}
      onClick={() => dispatch(setSearchResultBy(indexNumber))}
    >
      <Typography
        sx={{
          fontWeight: searchResultBy === indexNumber ? 600 : 400,
        }}
      >
        {title}
      </Typography>
      <Chip label={resultNumber} size="small" variant="outlined" />
    </ListItemButton>
  );
};

export default SearchSIdebarListButton;
