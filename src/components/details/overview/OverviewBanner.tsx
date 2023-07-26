import React from "react";
import { Box, Grid, Container, Typography } from "@mui/material";
import Image from "next/image";
import FiberManualRecordIcon from "@mui/icons-material/FiberManualRecord";
import OverviewBgImage from "../../../assets/images/overview-bg-image.jpg";
import OverviewBannerActionButtons from "./banner-action-buttons/OverviewBannerActionButtons";

const OverviewBanner = () => {
  return (
    <Box sx={{ position: "relative" }}>
      <Box sx={{ zIndex: 0, position: "absolute", top: 0, bottom: 0, left: 0 }}>
        <Image
          height={500}
          width={500}
          src={OverviewBgImage}
          alt=""
          className="w-full h-full object-cover"
        />
      </Box>
      <Container
        maxWidth="xl"
        sx={{
          zIndex: 1,
          position: "relative",
          background:
            "linear-gradient(to right, rgba(31.5, 10.5, 10.5, 1) calc((50vw - 170px) - 340px), rgba(31.5, 10.5, 10.5, 0.84) 50%, rgba(31.5, 10.5, 10.5, 0.84) 100%) !important",
          paddingY: "30px",
        }}
      >
        <Grid container columnSpacing={4}>
          <Grid item md={3}>
            <Box sx={{ height: "450px !important" }}>
              <Image
                height={400}
                width={500}
                src={OverviewBgImage}
                alt=""
                className="w-full h-full object-cover rounded-xl"
              />
            </Box>
          </Grid>
          <Grid item md={9}>
            <Box sx={{ marginBottom: "20px" }}>
              <Box
                sx={{
                  display: "flex",
                  flexDirection: "row",
                  alignItems: "center",
                  marginBottom: "5px",
                }}
              >
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    fontSize: "35px",
                    fontWeight: 700,
                    marginRight: "10px",
                  }}
                >
                  Oppenheimer
                </Typography>
                <Typography
                  sx={{ color: "rgba(255, 255, 255, 0.8)", fontSize: "35px" }}
                >
                  (2023)
                </Typography>
              </Box>
              <Box sx={{ display: "flex", alignItems: "center" }}>
                <Typography
                  sx={{
                    color: "#FFFFFF",
                    border: "1px solid rgba(255, 255, 255, 0.6)",
                    borderRadius: "2px",
                    marginRight: "10px",
                    paddingX: "4px",
                    paddingY: "2px",
                  }}
                >
                  PG-13
                </Typography>
                <Typography sx={{ color: "#FFFFFF" }}>
                  05/05/2023 (US)
                </Typography>
                <FiberManualRecordIcon
                  sx={{ color: "#FFFFFF", fontSize: "8px", marginX: "5px" }}
                />
                <Typography sx={{ color: "#FFFFFF" }}>
                  Science Fiction, Abenteuer, Action
                </Typography>
                <FiberManualRecordIcon
                  sx={{ color: "#FFFFFF", fontSize: "8px", marginX: "5px" }}
                />
                <Typography sx={{ color: "#FFFFFF" }}>2h 30m</Typography>
              </Box>
            </Box>
            <OverviewBannerActionButtons />
            <Box>
              <Typography
                sx={{
                  fontSize: "18px",
                  color: "rgba(255, 255, 255, 0.7)",
                  fontStyle: "italic",
                }}
              >
                Es ist Zeit, richtig aufzudrehen!
              </Typography>
              <Typography
                sx={{
                  color: "#FFFFFF",
                  marginTop: "10px",
                  marginBottom: "8px",
                  fontSize: "21px",
                  fontWeight: 600,
                }}
              >
                Overview
              </Typography>
              <Typography sx={{ color: "#FFFFFF", marginBottom: "20px" }}>
                Peter Quill, der immer noch unter dem Verlust von Gamora leidet,
                muss sein Team um sich versammeln, um das Universum zu
                verteidigen und gleichzeitig einen der Seinen zu schützen. Eine
                Mission, die, wenn sie nicht erfolgreich abgeschlossen wird,
                möglicherweise zum Ende der Guardians, wie wir sie kennen,
                führen könnte.
              </Typography>
            </Box>
            <Grid container rowSpacing={2}>
              <Grid item md={4}>
                <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  James Gunn
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  Director, Writer
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  James Gunn
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  Director, Writer
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  James Gunn
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  Director, Writer
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  James Gunn
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  Director, Writer
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  James Gunn
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  Director, Writer
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  James Gunn
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  Director, Writer
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  James Gunn
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  Director, Writer
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  James Gunn
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  Director, Writer
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  James Gunn
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  Director, Writer
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  James Gunn
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  Director, Writer
                </Typography>
              </Grid>
              <Grid item md={4}>
                <Typography sx={{ color: "#FFFFFF", fontWeight: 700 }}>
                  James Gunn
                </Typography>
                <Typography sx={{ color: "#FFFFFF", fontSize: "14px" }}>
                  Director, Writer
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OverviewBanner;
