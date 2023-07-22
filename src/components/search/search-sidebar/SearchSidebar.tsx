import React from "react";
import { Card, Chip, List, ListItemButton, Typography } from "@mui/material";
import SearchSIdebarListButton from "./SearchSIdebarListButton";
import { useAppDispatch } from "@/src/redux/hooks";
import { setSearchResultBy } from "@/src/redux/search/searchSlich";

type PropsType = {
  resultNumber: number;
};

const SearchSidebar = ({resultNumber}: PropsType) => {
  const [selectedIndex, setSelectedIndex] = React.useState(1);

  const dispatch = useAppDispatch();

  const handleListItemClick = (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => {
    dispatch(setSearchResultBy(index));
    setSelectedIndex(index);
  };

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
          resultNumber={resultNumber}
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
        />

        <SearchSIdebarListButton
          title="People"
          indexNumber={2}
          resultNumber={resultNumber}
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
        />

        <SearchSIdebarListButton
          title="TV Shows"
          indexNumber={3}
          resultNumber={resultNumber}
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
        />

        <SearchSIdebarListButton
          title="Collections"
          indexNumber={4}
          resultNumber={resultNumber}
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
        />

        <SearchSIdebarListButton
          title="Companies"
          indexNumber={5}
          resultNumber={resultNumber}
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
        />

        <SearchSIdebarListButton
          title="Keywords"
          indexNumber={6}
          resultNumber={resultNumber}
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
        />

        <SearchSIdebarListButton
          title="Networks"
          indexNumber={7}
          resultNumber={resultNumber}
          selectedIndex={selectedIndex}
          handleListItemClick={handleListItemClick}
        />
      </List>
    </Card>
  );
};

export default SearchSidebar;
