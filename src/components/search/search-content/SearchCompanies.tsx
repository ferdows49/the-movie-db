import React from "react";
import {
  Typography,
  Grid,
  Pagination,
  Box,
  Divider,
  Chip,
} from "@mui/material";
import Image from "next/image";
import Link from "next/link";
import NotFoundImage from "../../../assets/images/not-found-image.svg";
import { UrlConfig } from "@/src/config/UrlConfig";
import AdjustIcon from "@mui/icons-material/Adjust";

type PropsType = {
  companyData: {
    results: {
      id: number;
      name: string;
      logo_path: string;
      origin_country: string;
    }[];
  };
  count: number;
  page: number;
  handlePageChange: any;
};

const SearchCompanies = ({
  companyData,
  count,
  page,
  handlePageChange,
}: PropsType) => {
  return (
    <Grid container>
      {companyData && companyData?.results?.length > 0 ? (
        <>
          <Grid item xs={12} sm={12} md={12}>
            {companyData?.results?.map((item) => (
              <>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    cursor: "pointer",
                    paddingY: "10px",
                  }}
                >
                  <Link href="/">
                    {item?.logo_path ? (
                      <Image
                        width={500}
                        height={280}
                        src={`${UrlConfig.IMAGE_BASE_URL}${item?.logo_path}`}
                        alt=""
                        className={`w-24 h-12 mr-6 rounded cursor-pointer bg-gray-200`}
                      />
                    ) : (
                      <Image
                        width={500}
                        height={280}
                        src={NotFoundImage}
                        alt=""
                        className={`w-24 h-12 mr-6 rounded cursor-pointer bg-gray-200`}
                      />
                    )}
                  </Link>
                  <Box
                    sx={{
                      width: "100%",
                      display: "flex",
                      flexDirection: "row",
                      justifyContent: "start",
                      alignItems: "center"
                    }}
                  >
                    <Typography
                      gutterBottom
                      variant="h5"
                      component="div"
                      sx={{
                        fontSize: "20px",
                        lineHeight: "24px",
                        marginRight: "10px"
                      }}
                    >
                      {item?.name}
                    </Typography>
                    {item?.origin_country && (
                      <Chip
                        label={item?.origin_country}
                        sx={{ borderRadius: "8px" }}
                        size="small"
                      />
                    )}
                  </Box>
                </Box>
                <Divider />
              </>
            ))}
          </Grid>
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

export default SearchCompanies;
