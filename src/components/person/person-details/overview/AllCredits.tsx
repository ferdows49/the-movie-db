import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Divider from "@mui/material/Divider";

type PropsType = {
  combinedCreditsData: {
    cast: {
      id: number;
      title: string;
      poster_path: string;
      popularity: number;
      name: string;
    }[];
  };
  movieCreditsData: any;
  tvCreditsData: any;
};

const AllCredits = ({
  combinedCreditsData,
  movieCreditsData,
  tvCreditsData,
}: PropsType) => {
  return (
    <Grid container sx={{ marginTop: "30px" }}>
      <Grid item md={12}>
        <Typography
          sx={{ fontSize: "20px", fontWeight: 600, marginBottom: "10px" }}
        >
          Acting
        </Typography>
      </Grid>
      <Grid item md={12}>
        <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
          <List>
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton>
                <ListItemText primary="Trash" />
              </ListItemButton>
            </ListItem>
            <Divider />
            <ListItem disablePadding>
              <ListItemButton component="a" href="#simple-list">
                <ListItemText primary="Spam" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Grid>
    </Grid>
  );
};

export default AllCredits;
