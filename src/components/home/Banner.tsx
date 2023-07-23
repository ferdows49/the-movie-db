import React, { useState } from "react";
import BannerImage from "../../assets/images/banner.jpg";
import { Box, Container, Typography } from "@mui/material";
import Image from "next/image";
import { useRouter } from "next/navigation";

const Banner = () => {
  const router = useRouter();

  const [searchBy, setSearchBy] = useState<string>();

  return (
    <Box
      sx={{
        position: "relative",
        width: "100%",
        height: {
          xs: "320px",
          sm: "300px",
          md: "calc(100vh / 2.5)",
          lg: "calc(100vh / 2.5)",
        },
        display: "flex",
        minHeight: "300px",
      }}
    >
      <Box
        sx={{
          position: "absolute",
          zIndex: 0,
          width: "100%",
          height: {
            xs: "320px",
            sm: "300px",
            md: "calc(100vh / 2.5)",
            lg: "calc(100vh / 2.5)",
          },
          minHeight: "300px",
        }}
      >
        <Image
          src={BannerImage}
          alt=""
          height={300}
          width={2500}
          className="h-full w-full object-cover"
        />
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          zIndex: 1,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "48px",
            fontWeight: 700,
            lineHeight: "48px",
          }}
        >
          Welcome.
        </Typography>
        <Typography
          sx={{
            color: "#FFFFFF",
            fontSize: "32px",
            fontWeight: 600,
            marginBottom: "20px",
          }}
        >
          Millions of movies, TV shows and people to discover. Explore now.
        </Typography>
        <Box className="relative">
          <input
            type="text"
            placeholder="Search for a movie, tv show, person..."
            className="w-full rounded-full pl-6 pr-28 py-2.5 focus:border-none focus:ring-0 outline-none text-lg text-gray-700"
            onChange={(e) => setSearchBy(e.target.value)}
            onKeyPress={(event: any) => {
              if (event.key === "Enter") {
                const searchValue = event.target.value.trim();
                if (searchValue) {
                  router.push(`/search/${event?.target?.value}`);
                }
              }
            }}
          />
          <button
            onClick={() => searchBy && router.push(`/search/${searchBy}`)}
            className="px-4 sm:px-7 py-2.5 text-white rounded-full bg-cyan-500 border-none absolute top-0 right-0 font-bold text-lg"
          >
            Search
          </button>
        </Box>
      </Container>
    </Box>
  );
};

export default Banner;
