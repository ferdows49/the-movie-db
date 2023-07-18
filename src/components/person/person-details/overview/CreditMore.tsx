import React from "react";
import { UrlConfig } from "@/src/config/UrlConfig";
import {
  Box,
  Card,
  CardActionArea,
  Chip,
  Grid,
  IconButton,
  Typography,
} from "@mui/material";
import Image from "next/image";
import MovieOrTvImageNotFound from "../../../../assets/images/not-found-image.svg";
import FavoriteIcon from "@mui/icons-material/Favorite";
import BookmarkIcon from "@mui/icons-material/Bookmark";
import StarIcon from "@mui/icons-material/Star";

type PropsType = {
  data: {
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
  };
};

const CreditMore = ({ data }: PropsType) => {
  return (
    <Grid container columnSpacing={3} sx={{ padding: "10px" }}>
      <Grid item md={3}>
        <Card sx={{ borderRadius: "6px" }}>
          <CardActionArea>
            {data?.poster_path ? (
              <Image
                width={500}
                height={500}
                src={`${UrlConfig.IMAGE_BASE_URL}${data?.poster_path}`}
                alt=""
                className="w-full object-cover cursor-pointer"
              />
            ) : (
              <Image
                width={500}
                height={500}
                src={MovieOrTvImageNotFound}
                alt=""
                className="w-full h-full cursor-pointer"
              />
            )}
          </CardActionArea>
        </Card>
      </Grid>
      <Grid item md={9}>
        <Box
          sx={{ display: "flex", alignItems: "center", marginBottom: "10px" }}
        >
          <Typography
            sx={{ fontSize: "20px", fontWeight: 700, marginRight: "10px" }}
          >
            {(data?.title?.length > 25
              ? data?.title?.substring(0, 25) + "..."
              : data?.title) ||
              (data?.name?.length > 25
                ? data?.name?.substring(0, 25) + "..."
                : data?.name)}
          </Typography>
          <Chip
            icon={
              <StarIcon
                sx={{
                  color: "#FFFFFF !important",
                  fontSize: "14px !important",
                }}
              />
            }
            sx={{
              color: "#FFFFFF",
              backgroundColor: "#01B4E4 !important",
              padding: "6px",
              verticalAlign: "center",
            }}
            label={data?.vote_average}
            size="small"
          />
        </Box>
        <Typography sx={{ fontSize: "14px", marginBottom: "20px" }}>
          {data?.overview?.substring(0, data?.overview?.indexOf(" ", 80)) +
            "..."}
        </Typography>
        <Box sx={{ marginTop: "20px" }}>
          <IconButton
            sx={{
              backgroundColor: "#01B4E4 !important",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          >
            <FavoriteIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#01B4E4 !important",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          >
            <BookmarkIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
          <IconButton
            sx={{
              backgroundColor: "#01B4E4 !important",
              marginRight: "10px",
              borderRadius: "5px",
            }}
          >
            <StarIcon sx={{ color: "#FFFFFF" }} />
          </IconButton>
        </Box>
      </Grid>
    </Grid>
  );
};

export default CreditMore;
