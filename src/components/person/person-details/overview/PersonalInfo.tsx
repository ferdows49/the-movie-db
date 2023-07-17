import React, { useState } from "react";
import {
  Box,
  Typography,
  Card,
  CardActionArea,
  Tooltip,
  IconButton,
} from "@mui/material";
import Image from "next/image";
import PersonImageNotFound from "../../../../assets/images/person-image-not found.svg";
import { UrlConfig } from "@/src/config/UrlConfig";
import Link from "next/link";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";

type PropsType = {
  posterPath: string;
};

const PersonalInfo = ({ posterPath }: PropsType) => {
  return (
    <Box>
      <Card>
        <CardActionArea>
          {posterPath ? (
            <Image
              width={500}
              height={500}
              src={`${UrlConfig.IMAGE_BASE_URL}${posterPath}`}
              alt=""
              className="w-full rounded-lg object-cover cursor-pointer"
            />
          ) : (
            <Image
              width={500}
              height={500}
              src={PersonImageNotFound}
              alt=""
              className="w-full rounded-lg cursor-pointer"
            />
          )}
        </CardActionArea>
      </Card>

      <Box
        sx={{
          marginTop: "30px",
          marginBottom: "30px",
        }}
      >
        <Link href="">
          <Tooltip title="Visit Facebook">
            <FacebookOutlinedIcon sx={{ fontSize: 40, marginRight: "15px" }} />
          </Tooltip>
        </Link>

        <Link href="">
          <Tooltip title="Visit Twitter">
            <TwitterIcon sx={{ fontSize: 40, marginRight: "15px" }} />
          </Tooltip>
        </Link>

        <Link href="">
          <Tooltip title="Visit Instagram">
            <InstagramIcon sx={{ fontSize: 40, marginRight: "15px" }} />
          </Tooltip>
        </Link>

        <Link href="">
          <Tooltip title="Visit Youtube">
            <YouTubeIcon sx={{ fontSize: 40, marginRight: "15px" }} />
          </Tooltip>
        </Link>
      </Box>

      <Box>
        <Typography>Personal Info</Typography>

        <Typography>Known For</Typography>
        <Typography>Acting</Typography>

        <Typography>Known Credits</Typography>
        <Typography>53</Typography>

        <Typography>Gender</Typography>
        <Typography>Male</Typography>

        <Typography>Birth Date</Typography>
        <Typography>1997-09-12 (25 years old)</Typography>

        <Typography>Place of Birth</Typography>
        <Typography>Spokane, Washington, USA</Typography>
        
        <Typography>Also Known As</Typography>
        <Typography>Сідні Свіні</Typography>
        <Typography>Сідні Свіні</Typography>
        <Typography>Сідні Свіні</Typography>
      </Box>
    </Box>
  );
};

export default PersonalInfo;
