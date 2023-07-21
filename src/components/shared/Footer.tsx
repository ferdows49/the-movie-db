"use client";

import React from "react";
import { Grid, Typography } from "@mui/material";
import FooterLogo from "../../assets/images/footer-logo.svg";
import Image from "next/image";
import Link from "next/link";

const Footer = () => {
  return (
    <Grid
      container
      sx={{
        color: "#FFFFFF",
        backgroundColor: "#03243F",
        display: "flex",
        justifyContent: "center",
        alignItems: "start",
        paddingTop: "40px",
        paddingBottom: "60px",
        paddingLeft: {
          xs: "16px",
          sm: "32px",
        },
        paddingRight: {
          xs: "16px",
          sm: "32px",
        },
      }}
    >
      <Grid item xs={12} sm={12} md={1.2}>
        <Link href="/">
          <Image
            width={500}
            height={500}
            src={FooterLogo}
            alt=""
            className="h-28 w-20 cursor-pointer object-fill"
          />
        </Link>
      </Grid>
      <Grid item xs={6} sm={6} md={2} lg={1.6}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "28px",
            marginBottom: "10px",
          }}
        >
          THE BASICS
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          About TMDB
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          About TMDB
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          Support Forums
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          API
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          System Status
        </Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={2} lg={1.6}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "28px",
            marginBottom: "10px",
          }}
        >
          GET INVOLVED
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          Contribution Bible
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          Add New Movie
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          Add New TV Show
        </Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={2} lg={1.6}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "28px",
            marginBottom: "10px",
            marginTop: {
              xs: "15px",
              sm: "20px",
              md: 0,
              lg: 0,
            },
          }}
        >
          COMMUNITY
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          Guidelines
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          Discussions
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          Leaderboard
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          Twitter
        </Typography>
      </Grid>
      <Grid item xs={6} sm={6} md={2} lg={1.6}>
        <Typography
          sx={{
            fontSize: "20px",
            fontWeight: 700,
            lineHeight: "28px",
            marginBottom: "10px",
            marginTop: {
              xs: "15px",
              sm: "20px",
              md: 0,
              lg: 0,
            },
          }}
        >
          LEGAL
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          Terms of Use
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          API Terms of Use
        </Typography>
        <Typography
          sx={{
            fontSize: "16px",
            fontWeight: 400,
            lineHeight: "23px",
            marginBottom: "4px",
            cursor: "pointer"
          }}
        >
          Privacy Policy
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
