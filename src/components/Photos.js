import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import fetchPhotos from "../redux/photos/photosAction";
// Components


import Loader from "./shared/Loader";
import Links from "./shared/Links";
// Logo
import Photo from "./shared/Photo";
//style
import styles from "../style/photos.module.css";
import { Box, Grid, ImageListItem, Typography } from "@mui/material";
import { Container } from "@mui/system";

export default function Photos() {
  const photos = useSelector((state) => state.photosState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!photos.photos.length) dispatch(fetchPhotos("nature", 1));
  }, []);

  if (photos.loading)
    return (
      <Box className={styles.loader}>
        <Loader />
      </Box>
    );
  if (photos.Error) return <h1>Use VPN</h1>;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Links />
        </Grid>
        <Grid item xs={12} mb={2}>
          <Typography component="h1" variant="h4" fontWeight={700}>
            {photos.query.toUpperCase()}
          </Typography>
        </Grid>
        {photos.photos.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Photo key={item.id} photoData={item} />
          </Grid>
        ))}
      </Grid>


    </Container>
  );
}
