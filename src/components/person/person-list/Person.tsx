"use client";

import React, { useState, useEffect } from "react";
import CustomContainer from "@/src/components/shared/CustomContainer";
import { Grid, Typography, Pagination } from "@mui/material";
import CircularLoading from "../../shared/CircularLoading";
import axios from "axios";
import { UrlConfig } from "@/src/config/UrlConfig";
import { ApiService } from "@/src/config/ApiService";
import PersonCard from "./PersonCard";

type ItemTypes = {
  id: number;
  name: string;
  known_for_department: string;
  profile_path: string;
};

const Person = ({ data }: { data: any }) => {
  const [currentData, setCurrentData] = useState<any>();
  const [currentPage, setCurrentPage] = useState<number>(1);
  const [loading, setLoading] = useState<boolean>(false);

  const handlePageChange = async (event: any, page: number) => {
    setLoading(true);

    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });

    await axios
      .get(
        `${UrlConfig.BASE_URL}${ApiService.GET_POPULAR_PERSON}?page=${page}&api_key=${UrlConfig.API_KEY}`
      )
      .then((res) => {
        setCurrentData(res?.data);
        setCurrentPage(page);
        setLoading(false);
      })
      .catch((err) => {
        setLoading(false);
      });
  };

  useEffect(() => {
    setLoading(true);
    setCurrentData(data);
    setLoading(false);
  }, []);

  return (
    <CustomContainer>
      {!currentData || currentData?.results?.length === 0 ? (
        <CircularLoading />
      ) : (
        <Grid container columnSpacing={3}>
          <Grid item xs={12} sm={12} md={12} lg={12}>
            <Typography className="mb-5 text-2xl font-semibold">
              Popular People
            </Typography>
          </Grid>

          <Grid item xs={12} sm={12} md={12} lg={12}>
            {loading ? (
              <CircularLoading />
            ) : (
              <Grid container spacing={3}>
                {currentData && currentData?.results?.length > 0 && (
                  <>
                    {currentData?.results?.map((item: ItemTypes) => (
                      <PersonCard
                        key={item?.id}
                        id={item?.id}
                        name={item?.name}
                        knownFor={item?.known_for_department}
                        posterPath={item?.profile_path}
                      />
                    ))}
                    <Grid
                      item
                      xs={12}
                      sm={12}
                      md={12}
                      lg={12}
                      className="py-8 flex justify-center items-center"
                    >
                      <Pagination
                        count={currentData?.total_pages}
                        page={currentPage}
                        onChange={handlePageChange}
                      />
                    </Grid>
                  </>
                )}
              </Grid>
            )}
          </Grid>
        </Grid>
      )}
    </CustomContainer>
  );
};

export default Person;
