import React, { useState, useEffect } from "react";
import {
  Box,
  Grid,
  Tooltip,
  TooltipProps,
  Typography,
  styled,
  tooltipClasses,
} from "@mui/material";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Divider from "@mui/material/Divider";
import LoupeIcon from "@mui/icons-material/Loupe";
import Link from "next/link";
import CreditMore from "./CreditMore";

type PropsType = {
  combinedCreditsData: {
    cast: {
      id: number;
      title: string;
      original_title: string;
      poster_path: string;
      popularity: number;
      name: string;
      original_name: string;
      release_date: string;
      episode_count: number;
      character: string;
      overview: string;
      vote_average: number;
    }[];
  };
  movieCreditsData: any;
  tvCreditsData: any;
};

const CustomTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))({
  [`& .${tooltipClasses.tooltip}`]: {
    maxWidth: 520,
  },
});

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
        {combinedCreditsData &&
          combinedCreditsData?.cast?.length > 0 &&
          combinedCreditsData?.cast
            ?.sort(
              (a, b) =>
                new Date(b?.release_date).getTime() -
                new Date(a?.release_date).getTime()
            )
            ?.map(
              (item) =>
                item?.release_date && (
                  <Box sx={{ width: "100%", bgcolor: "background.paper" }}>
                    <List>
                      <ListItem disablePadding sx={{ padding: "12px" }}>
                        <Typography sx={{ fontSize: "16px", fontWeight: 300 }}>
                          {item?.release_date?.split("-")[0]}
                        </Typography>
                        <CustomTooltip
                          title={<CreditMore data={item} />}
                          componentsProps={{
                            tooltip: {
                              sx: {
                                fontSize: "16px",
                                fontWeight: 300,
                                bgcolor: "#032541",
                                "& .MuiTooltip-arrow": {
                                  color: "#032541",
                                },
                              },
                            },
                          }}
                        >
                          <LoupeIcon
                            sx={{
                              fontSize: 20,
                              marginRight: "20px",
                              marginLeft: "20px",
                              cursor: "pointer",
                            }}
                          />
                        </CustomTooltip>
                        <Box>
                          <Typography sx={{ fontWeight: 600 }}>
                            <Link href="/">{item?.title}</Link>
                          </Typography>
                          <Box sx={{ display: "flex", marginTop: "6px" }}>
                            {item?.episode_count && (
                              <Typography
                                sx={{
                                  display: "inline-block",
                                  color: "rgba(0, 0, 0, 0.5)",
                                  marginRight: "6px",
                                }}
                              >
                                <Link href="/">{`( ${item?.episode_count} episodes)`}</Link>{" "}
                                as
                              </Typography>
                            )}

                            <Typography
                              sx={{
                                display: "inline-block",
                                color: "rgba(0, 0, 0, 0.8)",
                                fontWeight: 300,
                              }}
                            >
                              {item?.character}
                            </Typography>
                          </Box>
                        </Box>
                      </ListItem>
                      <Divider />
                    </List>
                  </Box>
                )
            )}
      </Grid>
    </Grid>
  );
};

export default AllCredits;
