import React from "react";
import {
  Card,
  CardActionArea,
  CardContent,
  Grid,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { UrlConfig } from "@/src/config/UrlConfig";
import Link from "next/link";
import PersonImageNotFound from "../../../assets/images/person-image-not found.svg";

type ItemCardPropsType = {
  id: number;
  name: string;
  knownFor: string;
  posterPath: string;
};

const PersonCard = ({ id, name, knownFor, posterPath }: ItemCardPropsType) => {
  return (
    <Grid item xs={12} sm={6} md={2.4} lg={2.4}>
      <Link href={`/person/${id}`}>
        <Card>
          <CardActionArea>
            {posterPath ? (
              <Image
                width={500}
                height={500}
                src={`${UrlConfig.IMAGE_BASE_URL}${posterPath}`}
                alt=""
                className="w-full h-60 object-cover cursor-pointer"
              />
            ) : (
              <Image
                width={500}
                height={500}
                src={PersonImageNotFound}
                alt=""
                className="w-full h-60 cursor-pointer"
              />
            )}
            <CardContent className="bg-gray-50">
              <Typography
                className="text-base font-bold text-black cursor-pointer"
                variant="h5"
                component="div"
              >
                {name}
              </Typography>

              {knownFor && (
                <Typography
                  className="text-base font-normal text-black opacity-60 mb-0"
                  gutterBottom
                  variant="h5"
                  component="div"
                >
                  {knownFor}
                </Typography>
              )}
            </CardContent>
          </CardActionArea>
        </Card>
      </Link>
    </Grid>
  );
};

export default PersonCard;
