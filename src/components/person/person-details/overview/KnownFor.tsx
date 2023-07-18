import React, { useState, useEffect } from "react";
import { Box, Card, CardActionArea, Typography } from "@mui/material";
import Image from "next/image";
import PersonImageNotFound from "../../../../assets/images/person-image-not found.svg";
import { UrlConfig } from "@/src/config/UrlConfig";
import Link from "next/link";

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
};

type itemsType = {
  id: number;
  title: string;
  poster_path: string;
  popularity: number;
  name: string;
};

type knownForItem = {
  item: {
    poster_path: string;
  };
};

const KnownFor = ({ combinedCreditsData }: PropsType) => {
  const [knownFor, setKnownFor] = useState<any>([]);
  console.log("knownFor", knownFor);

  useEffect(() => {
    const personKnownFor =
      combinedCreditsData &&
      combinedCreditsData?.cast?.length > 0 &&
      combinedCreditsData?.cast
        ?.sort((a, b) => b.popularity - a.popularity)
        ?.slice(0, 20);

    setKnownFor(personKnownFor);
  }, [combinedCreditsData]);

  return (
    <>
      {knownFor && knownFor?.length > 0 && (
        <>
          <Typography
            sx={{
              fontSize: "20px",
              fontWeight: 600,
              marginBottom: "16px",
              marginTop: "25px",
            }}
          >
            Known For
          </Typography>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              overflowX: "auto",
              overflowY: "hidden",
              gap: (theme) => theme.spacing(2),
              scrollbarWidth: "thin",
              scrollbarColor: "#ccc #f5f5f5",
              "&::-webkit-scrollbar": {
                width: "5px !important",
              },
              "&::-webkit-scrollbar-track": {
                backgroundColor: "#f5f5f5",
              },
              "&::-webkit-scrollbar-thumb": {
                backgroundColor: "#ccc",
              },
            }}
          >
            {knownFor?.map((item: itemsType) => (
              <Link href="/">
                <Card sx={{ width: "150px", borderRadius: "12px" }}>
                  <CardActionArea>
                    {item?.poster_path ? (
                      <Image
                        width={500}
                        height={500}
                        src={`${UrlConfig.IMAGE_BASE_URL}${item?.poster_path}`}
                        alt=""
                        className="w-full object-cover cursor-pointer"
                      />
                    ) : (
                      <Image
                        width={500}
                        height={500}
                        src={PersonImageNotFound}
                        alt=""
                        className="w-40 h-52 cursor-pointer"
                      />
                    )}
                  </CardActionArea>
                </Card>
                <Typography
                  sx={{
                    fontSize: "14px",
                    fontWeight: 300,
                    marginBottom: "10px",
                    marginTop: "10px",
                    alignItems: "center",
                  }}
                >
                  {item?.title || item?.name}
                </Typography>
              </Link>
            ))}
          </Box>
        </>
      )}
    </>
  );
};

export default KnownFor;
