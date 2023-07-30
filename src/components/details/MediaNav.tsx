import React, { useState, useEffect, SyntheticEvent } from "react";
import CustomContainer from "../shared/CustomContainer";
import { Grid, Tab, Box, Button, Menu, MenuItem } from "@mui/material";
import TabContext from "@mui/lab/TabContext";
import TabList from "@mui/lab/TabList";
import TabPanel from "@mui/lab/TabPanel";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import MediaOverview from "./overview/MediaOverview";

const MediaNav = () => {
  const [overviewAnchorEl, setOverviewAnchorEl] =
    React.useState<null | HTMLElement>(null);
  const [mediaAnchorEl, setMediaAnchorEl] = React.useState<null | HTMLElement>(
    null
  );
  const [value, setValue] = useState<string>("1");

  const openOverview = Boolean(overviewAnchorEl);
  const openMedia = Boolean(mediaAnchorEl);

  const handleClick = (event: any, type: string) => {
    if (type === "overview") {
      setOverviewAnchorEl(event.currentTarget);
    } else if (type === "media") {
      setMediaAnchorEl(event.currentTarget);
    }
  };

  const handleClose = () => {
    setOverviewAnchorEl(null);
    setMediaAnchorEl(null);
  };

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <TabContext value={value}>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
            }}
          >
            <TabList
              onChange={handleChange}
              aria-label="lab API tabs example"
              sx={{
                overflow: "auto",
              }}
            >
              <Tab
                onClick={(e) => handleClick(e, "overview")}
                label={
                  <Box>
                    Overview
                    <KeyboardArrowDownIcon
                      sx={{ fontSize: "20px", marginLeft: "15px" }}
                    />
                  </Box>
                }
                value="1"
              />
              <Tab
                onClick={(e) => handleClick(e, "media")}
                label={
                  <Box>
                    Media
                    <KeyboardArrowDownIcon
                      sx={{ fontSize: "20px", marginLeft: "15px" }}
                    />
                  </Box>
                }
                value="2"
              />
            </TabList>
          </Box>
          <TabPanel value="1" sx={{ padding: 0 }}>
            <MediaOverview />
          </TabPanel>

          <TabPanel value="2" sx={{ padding: 0 }}>
            srer
          </TabPanel>

          <Menu
            id="basic-menu"
            anchorEl={overviewAnchorEl}
            open={openOverview}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Main</MenuItem>
            <MenuItem onClick={handleClose}>Alternative Titles</MenuItem>
            <MenuItem onClick={handleClose}>Cast & Crew</MenuItem>
            <MenuItem onClick={handleClose}>Release Dates</MenuItem>
            <MenuItem onClick={handleClose}>Translations</MenuItem>
          </Menu>

          <Menu
            id="basic-menu-two"
            anchorEl={mediaAnchorEl}
            open={openMedia}
            onClose={handleClose}
            MenuListProps={{
              "aria-labelledby": "basic-button",
            }}
          >
            <MenuItem onClick={handleClose}>Backdrops</MenuItem>
            <MenuItem onClick={handleClose}>Logos</MenuItem>
            <MenuItem onClick={handleClose}>Posters</MenuItem>
            <MenuItem onClick={handleClose}>Videos</MenuItem>
          </Menu>
        </TabContext>
      </Grid>
    </Grid>
  );
};

export default MediaNav;
