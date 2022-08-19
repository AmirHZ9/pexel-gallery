import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import fetchPhotos from "../redux/photos/photosAction";
// Components
import Loader from "./shared/Loader";
import Links from "./shared/Links";
import Photo from "./shared/Photo";
//style
import { Grid, Typography, Container } from "@mui/material";
import { useParams } from "react-router-dom";
import AppPaginating from "./shared/AppPaginating";

export default function Photos() {
  const photos = useSelector((state) => state.photosState);
  const dispatch = useDispatch();
  const href = window.location.href;

  useEffect(() => {
    if (!photos.photos.length) dispatch(fetchPhotos("nature", 1));

    if (href.split("/")[3] === "home") {
      dispatch(fetchPhotos("nature", 1));
    }
  }, [href]);

  if (photos.loading) return <Loader />;
  if (photos.Error) return <h1>Use VPN</h1>;

  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <Links />
        </Grid>
        <Grid item xs={12} m={2}>
          <Typography component="h1" variant="h4" fontWeight={700}>
            {photos.query.toUpperCase()}
          </Typography>
        </Grid>
        {photos.photos.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Photo photoData={item} />
          </Grid>
        ))}
      </Grid>
      <AppPaginating/>
    </Container>
  );
}
