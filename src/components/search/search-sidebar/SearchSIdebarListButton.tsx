import React from "react";
import { Chip, ListItemButton, Typography } from "@mui/material";

type PropsType = {
  title: string;
  resultNumber: number;
  selectedIndex: number;
  handleListItemClick: (
    event: React.MouseEvent<HTMLDivElement, MouseEvent>,
    index: number
  ) => void;
  indexNumber: number;
};

const SearchSIdebarListButton = ({
  title,
  resultNumber,
  selectedIndex,
  handleListItemClick,
  indexNumber,
}: PropsType) => {
  return (
    <ListItemButton
      sx={{
        backgroundColor:
          selectedIndex === indexNumber ? "#EBEBEB !important" : "transparent",
        fontWeight: selectedIndex === indexNumber ? 600 : 400,
        "&:hover": {
          backgroundColor: "#EBEBEB !important",
        },
        display: "flex",
        justifyContent: "space-between",
      }}
      selected={selectedIndex === indexNumber}
      onClick={(event) => handleListItemClick(event, indexNumber)}
    >
      <Typography
        sx={{
          fontWeight: selectedIndex === indexNumber ? 600 : 400,
        }}
      >
        {title}
      </Typography>
      <Chip label={resultNumber} size="small" variant="outlined" />
    </ListItemButton>
  );
};

export default SearchSIdebarListButton;
