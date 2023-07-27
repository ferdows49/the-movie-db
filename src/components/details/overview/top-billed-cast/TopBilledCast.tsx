import React from "react";
import { Grid, Typography, Card, CardContent, Box } from "@mui/material";
import Image from "next/image";
import NotFoundImage from "../../../../assets/images/person-image-not found.svg";

const TopBilledCast = () => {
  return (
    <Grid container>
      <Grid item xs={12} sm={12} md={12}>
        <Typography>Top Billed Cast</Typography>
      </Grid>
      <Grid
        item
        xs={12}
        sm={12}
        md={12}
        sx={{
          display: "flex",
          flexWrap: "nowrap",
          flexDirection: "row",
          overflowX: "auto",
          overflowY: "hidden",
          scrollbarWidth: "thin",
          "&::-webkit-scrollbar": {
            width: "5px",
          },
          "&::-webkit-scrollbar-thumb": {
            background: "#DBDBDB",
            borderRadius: "5px",
          },
        }}
      >
        <Card sx={{ minWidth: 150, marginRight: "20px" }}>
          <Image
            height={500}
            width={500}
            src={NotFoundImage}
            alt=""
            className="h-40 w-full object-cover"
          />
          <CardContent>
            <Typography>Lizard</Typography>
            <Typography>Lizard</Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 500 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 500 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 500 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 500 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
        <Card sx={{ minWidth: 500 }}>
          <CardContent>
            <Typography gutterBottom variant="h5" component="div">
              Lizard
            </Typography>
            <Typography variant="body2" color="text.secondary">
              Lizards are a widespread group of squamate reptiles, with over
              6,000 species, ranging across all continents except Antarctica
            </Typography>
          </CardContent>
        </Card>
      </Grid>
    </Grid>
  );
};

export default TopBilledCast;
