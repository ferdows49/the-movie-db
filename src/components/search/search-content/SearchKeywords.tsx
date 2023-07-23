import React from "react";
import { Typography, Grid, Pagination, Box, Divider } from "@mui/material";

type PropsType = {
  keywordData: {
    results: {
      id: number;
      name: string;
    }[];
  };
  count: number;
  page: number;
  handlePageChange: any;
};

const SearchKeywords = ({
  keywordData,
  count,
  page,
  handlePageChange,
}: PropsType) => {
  return (
    <Grid container>
      {keywordData && keywordData?.results?.length > 0 ? (
        <>
          <Grid item xs={12} sm={12} md={12}>
            {keywordData?.results?.map((item) => (
              <>
                <Box
                  sx={{
                    display: "flex",
                    width: "100%",
                    cursor: "pointer",
                    paddingY: "5px",
                  }}
                >
                  <Typography
                    variant="h5"
                    component="div"
                    sx={{
                      fontSize: "20px",
                      lineHeight: "24px",
                    }}
                  >
                    {item?.name}
                  </Typography>
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

export default SearchKeywords;
