import React from "react";
import { Card, List, Typography } from "@mui/material";
import SearchSIdebarListButton from "./SearchSIdebarListButton";

type PropsType = {
  searchMovieTotalResults: number;
  searchTvShowTotalResults: number;
  searchCollectionTotalResults: number;
  searchCompanyTotalResults: number;
  searchKeywordTotalResults: number;
  searchPeopleTotalResults: number;
};

const SearchSidebar = ({
  searchMovieTotalResults,
  searchTvShowTotalResults,
  searchCollectionTotalResults,
  searchCompanyTotalResults,
  searchKeywordTotalResults,
  searchPeopleTotalResults,
}: PropsType) => {

  return (
    <Card sx={{ borderRadius: "8px" }}>
      <Typography
        gutterBottom
        variant="h5"
        component="div"
        sx={{
          padding: "20px",
          backgroundColor: "#01b4e4",
          color: "#FFFFFF",
          fontSize: "20px",
          fontWeight: 600,
          marginBottom: 0,
        }}
      >
        Search Results
      </Typography>
      <List
        component="nav"
        aria-label="secondary mailbox folder"
        sx={{ paddingTop: "0 !important", paddingBottom: "0 !important" }}
      >
        <SearchSIdebarListButton
          title="Movie"
          indexNumber={1}
          resultNumber={searchMovieTotalResults}
        />

        <SearchSIdebarListButton
          title="People"
          indexNumber={2}
          resultNumber={searchPeopleTotalResults}
        />

        <SearchSIdebarListButton
          title="TV Shows"
          indexNumber={3}
          resultNumber={searchTvShowTotalResults}
        />

        <SearchSIdebarListButton
          title="Collections"
          indexNumber={4}
          resultNumber={searchCollectionTotalResults}
        />

        <SearchSIdebarListButton
          title="Companies"
          indexNumber={5}
          resultNumber={searchCompanyTotalResults}
        />

        <SearchSIdebarListButton
          title="Keywords"
          indexNumber={6}
          resultNumber={searchKeywordTotalResults}
        />
      </List>
    </Card>
  );
};

export default SearchSidebar;
