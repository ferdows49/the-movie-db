import React from "react";
import { Box, Typography } from "@mui/material";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";
import Image from "next/image";
import MediaImageNotFound from "../../assets/images/not-found-image.svg";
import { UrlConfig } from "@/src/config/UrlConfig";

type PropsType = {
  posterPath: string;
  name: string;
  handleChange: any;
  color: string;
};

const HeadingTitle = ({ posterPath, name, handleChange, color }: PropsType) => {
  return (
    <Box sx={{ display: "flex", paddingY: "15px" }}>
      {posterPath ? (
        <Image
          width={500}
          height={500}
          src={`${UrlConfig.IMAGE_BASE_URL}${posterPath}`}
          alt=""
          className="w-[72px] h-24 rounded-sm object-cover cursor-pointer"
        />
      ) : (
        <Image
          width={500}
          height={500}
          src={MediaImageNotFound}
          alt=""
          className="w-[72px] h-24 rounded-sm object-cover cursor-pointer"
        />
      )}
      <Box
        sx={{
          marginLeft: "20px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Typography
          sx={{
            fontSize: "26px",
            fontWeight: 600,
            color: color || "#FFFFFF !importent",
          }}
        >
          {name || "N/A"}
        </Typography>
        <Typography
          sx={{
            fontSize: "18px",
            fontWeight: 600,
            color: "#01b4e4",
            cursor: "pointer",
          }}
          onClick={(e) => handleChange(e, "1")}
        >
          <ArrowBackIcon />
          Back to main
        </Typography>
      </Box>
    </Box>
  );
};

export default HeadingTitle;
