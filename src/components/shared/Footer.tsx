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
          }}
        >
          Privacy Policy
        </Typography>
      </Grid>
    </Grid>
  );
};

export default Footer;
