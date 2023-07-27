import React from "react";
import { Box } from "@mui/material";
import Link from "next/link";
import { UrlConfig } from "@/src/config/UrlConfig";
import CustomTooltip from "./CustomTooltip";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookOutlinedIcon from "@mui/icons-material/FacebookOutlined";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import LanguageIcon from "@mui/icons-material/Language";

type PropsType = {
  facebookId: string | null;
  twitterId: string | null;
  instagramId: string | null;
  youtubeId: string | null;
  website: string | null;
};

const SocialMediaLink = ({
  facebookId,
  twitterId,
  instagramId,
  youtubeId,
  website,
}: PropsType) => {
  return (
    <>
      {(facebookId || twitterId || instagramId || youtubeId || website) && (
        <Box
          sx={{
            marginBottom: {
              md: "30px",
            },
            display: "flex",
            justifyContent: {
              xs: "center",
              sm: "center",
              md: "start",
            },
          }}
        >
          {facebookId && (
            <Link
              href={`${UrlConfig.FACEBOOK_URL}${facebookId}`}
              target="_blank"
            >
              <CustomTooltip title="Visit Facebook">
                <FacebookOutlinedIcon
                  sx={{
                    fontSize: {
                      xs: 30,
                      sm: 30,
                      md: 40,
                      lg: 40,
                    },
                  }}
                />
              </CustomTooltip>
            </Link>
          )}

          {twitterId && (
            <Link href={`${UrlConfig.TWITTER_URL}${twitterId}`} target="_blank">
              <CustomTooltip title="Visit Twitter">
                <TwitterIcon
                  sx={{
                    fontSize: {
                      xs: 30,
                      sm: 30,
                      md: 40,
                      lg: 40,
                    },
                    marginLeft: `${facebookId ? "15px" : "0px"}`,
                  }}
                />
              </CustomTooltip>
            </Link>
          )}

          {instagramId && (
            <Link
              href={`${UrlConfig.INSTAGRAM_URL}${instagramId}`}
              target="_blank"
            >
              <CustomTooltip title="Visit Instagram">
                <InstagramIcon
                  sx={{
                    fontSize: {
                      xs: 30,
                      sm: 30,
                      md: 40,
                      lg: 40,
                    },
                    marginLeft: `${facebookId || twitterId ? "15px" : "0px"}`,
                  }}
                />
              </CustomTooltip>
            </Link>
          )}

          {youtubeId && (
            <Link href={`${UrlConfig.YOUTUBE_URL}${youtubeId}`} target="_blank">
              <CustomTooltip title="Visit Youtube">
                <YouTubeIcon
                  sx={{
                    fontSize: {
                      xs: 30,
                      sm: 30,
                      md: 40,
                      lg: 40,
                    },
                    marginLeft: `${
                      facebookId || twitterId || instagramId ? "15px" : "0px"
                    }`,
                  }}
                />
              </CustomTooltip>
            </Link>
          )}

          {website && (
            <Link href={`${website}`} target="_blank">
              <CustomTooltip title="Visit Website">
                <LanguageIcon
                  sx={{
                    fontSize: {
                      xs: 30,
                      sm: 30,
                      md: 40,
                      lg: 40,
                    },
                    marginLeft: `${
                      facebookId || twitterId || instagramId ? "15px" : "0px"
                    }`,
                  }}
                />
              </CustomTooltip>
            </Link>
          )}
        </Box>
      )}
    </>
  );
};

export default SocialMediaLink;
