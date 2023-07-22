import React, { useState } from "react";
import { Card, CardContent, Typography, Grid, Pagination } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "../../../assets/images/not-found-image.svg";
import { UrlConfig } from "@/src/config/UrlConfig";

type PropsType = {
  mediaData: {
    results: {
      id: number;
      title: string;
      name: string;
      backdrop_path: string;
      overview: string;
      poster_path: string;
      release_date: string;
      first_air_date: string;
    }[];
  };
  count: number;
  page: number;
  handlePageChange: any;
};

const SearchMedia = ({
  mediaData,
  count,
  page,
  handlePageChange,
}: PropsType) => {
  return (
    <Grid container spacing={3}>
      {mediaData &&
        mediaData?.results?.length > 0 &&
        mediaData?.results?.map((item) => (
          <Grid item md={12}>
            <Card sx={{ display: "flex", width: "100%" }}>
              <Link href="/">
                {item?.poster_path ? (
                  <Image
                    width={500}
                    height={280}
                    src={`${UrlConfig.IMAGE_BASE_URL}${item?.poster_path}`}
                    alt=""
                    className={`w-32 h-40 cursor-pointer bg-gray-200`}
                  />
                ) : (
                  <Image
                    width={500}
                    height={280}
                    src={NotFoundImage}
                    alt=""
                    className={`w-32 h-40 cursor-pointer bg-gray-200`}
                  />
                )}
              </Link>
              <CardContent
                sx={{
                  width: "100%",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                }}
              >
                <Typography
                  gutterBottom
                  variant="h5"
                  component="div"
                  sx={{ fontSize: "24px", fontWeight: 600, lineHeight: "23px" }}
                >
                  {item?.title || item?.name}
                </Typography>

                {(item?.release_date || item?.first_air_date) && (
                  <Typography sx={{ color: "#999" }}>
                    {item?.release_date || item?.first_air_date}
                  </Typography>
                )}

                <Typography variant="body2" color="text.secondary">
                  {item?.overview?.split(" ")?.length > 40
                    ? `${item?.overview
                        ?.split(" ")
                        ?.slice(0, 40)
                        ?.join(" ")}...`
                    : item?.overview}
                </Typography>
              </CardContent>
            </Card>
          </Grid>
        ))}

      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        lg={12}
        className="py-8 flex justify-center items-center"
      >
        <Pagination count={count} page={page} onChange={handlePageChange} />
      </Grid>
    </Grid>
  );
};

export default SearchMedia;
