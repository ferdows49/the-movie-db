import React from "react";
import { Typography, Grid, Pagination, Box } from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "../../../assets/images/not-found-image.svg";
import { UrlConfig } from "@/src/config/UrlConfig";
import AdjustIcon from "@mui/icons-material/Adjust";

type PropsType = {
  peopleData: {
    results: {
      gender: number;
      id: number;
      known_for: {
        title: string;
        name: string;
      }[];
      known_for_department: string;
      name: string;
      profile_path: string;
    }[];
  };
  count: number;
  page: number;
  handlePageChange: any;
};

const SearchPeople = ({
  peopleData,
  count,
  page,
  handlePageChange,
}: PropsType) => {
  return (
    <Grid container spacing={2}>
      {peopleData && peopleData?.results?.length > 0 ? (
        <>
          {peopleData?.results?.map((item) => (
            <Grid item xs={12} sm={12} md={12}>
              <Box sx={{ display: "flex", width: "100%", cursor: "pointer" }}>
                <Link href="/">
                  {item?.profile_path ? (
                    <Image
                      width={500}
                      height={280}
                      src={`${UrlConfig.IMAGE_BASE_URL}${item?.profile_path}`}
                      alt=""
                      className={`w-20 h-20 mr-6 rounded-lg cursor-pointer bg-gray-200`}
                    />
                  ) : (
                    <Image
                      width={500}
                      height={280}
                      src={NotFoundImage}
                      alt=""
                      className={`w-20 h-20 mr-6 rounded-lg cursor-pointer bg-gray-200`}
                    />
                  )}
                </Link>
                <Box
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
                    sx={{
                      fontSize: "20px",
                      fontWeight: 600,
                      lineHeight: "24px",
                    }}
                  >
                    {item?.name}
                  </Typography>
                  <Box sx={{ display: "flex", alignItems: "center" }}>
                    <Typography>{item?.known_for_department}</Typography>
                    <AdjustIcon sx={{ fontSize: "15px", marginX: "8px" }} />

                    {item?.known_for?.length > 0 &&
                      item?.known_for?.map((el, index) =>
                        item?.known_for?.length - 1 === index ? (
                          <Typography>{el?.title || el?.name}</Typography>
                        ) : (
                          <Typography>{`${
                            el?.title || el?.name
                          },\u00A0`}</Typography>
                        )
                      )}
                  </Box>
                </Box>
              </Box>
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
        </>
      ) : (
        <Grid
          item
          xs={12}
          sm={12}
          md={12}
          lg={12}
          className="py-8 flex justify-center items-center"
        >
          <Typography>No data found.</Typography>
        </Grid>
      )}
    </Grid>
  );
};

export default SearchPeople;
