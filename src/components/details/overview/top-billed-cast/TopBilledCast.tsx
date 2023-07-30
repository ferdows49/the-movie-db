import React from "react";
import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import Image from "next/image";
import NotFoundImage from "../../../../assets/images/person-image-not found.svg";
import { useAppSelector } from "@/src/redux/hooks";
import { UrlConfig } from "@/src/config/UrlConfig";
import Link from "next/link";

const TopBilledCast = () => {
  const creditsData = useAppSelector(
    (state) => state.mediaDetailsReducer.creditsData
  );

  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <Typography
          sx={{ fontSize: "22px", fontWeight: 600, marginBottom: "20px" }}
        >
          Top Billed Cast
        </Typography>
      </Grid>
      <Grid item xs={12} sm={12} md={12}>
        <Grid
          container
          columnSpacing={2}
          sx={{
            display: "flex",
            flexWrap: "nowrap",
            overflowX: "auto",
            overflowY: "hidden",
            scrollbarWidth: "thin",
            paddingBottom: "10px",
            "&::-webkit-scrollbar": {
              width: "5px",
            },
            "&::-webkit-scrollbar-thumb": {
              background: "#DBDBDB",
              borderRadius: "5px",
            },
          }}
        >
          {creditsData &&
            creditsData?.cast?.length > 0 &&
            creditsData?.cast?.map((item) => (
              <Grid item key={item?.id}>
                <Link href={`/person/${item?.id}`}>
                  <Card
                    sx={{
                      minWidth: 150,
                      marginRight: "20px",
                      cursor: "pointer",
                    }}
                  >
                    {item?.profile_path ? (
                      <Image
                        height={500}
                        width={500}
                        src={`${UrlConfig.IMAGE_BASE_URL}${item?.profile_path}`}
                        alt=""
                        className="h-40 w-full object-cover"
                      />
                    ) : (
                      <Image
                        height={500}
                        width={500}
                        src={NotFoundImage}
                        alt=""
                        className="h-40 w-full object-cover"
                      />
                    )}

                    <CardContent>
                      <Typography sx={{ fontWeight: 700 }}>
                        {item?.name}
                      </Typography>
                      <Typography sx={{ fontSize: "14px" }}>
                        {item?.character}
                      </Typography>
                    </CardContent>
                  </Card>
                </Link>
              </Grid>
            ))}
        </Grid>
      </Grid>
    </Grid>
  );
};

export default TopBilledCast;
