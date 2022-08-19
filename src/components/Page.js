import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import fetchPhotos from "../redux/photos/photosAction";
import Photo from "./shared/Photo";
import { Grid, Typography } from "@mui/material";
import { Container } from "@mui/system";
import AppPaginating from "./shared/AppPaginating";
import Loader from "./shared/Loader";
export default function Page() {
  const params = useParams();
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.photosState);
  useEffect(() => {
    dispatch(
      fetchPhotos(
        params.query.length ? params.query : "nature",
        params.page
      )
    );
  }, [params.page, params.query]);
  if (photos.loading) return <Loader/>
  return (
    <Container maxWidth="xl">
    <Grid container>
      <Grid item xs={12} m={2}>
          <Typography component="h1" variant="h4" fontWeight={700}>
            {params.query}
          </Typography>
      </Grid>
      {photos.photos.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
          <Photo photoData={item} />

        </Grid>
      ))}
    </Grid>
    <AppPaginating/>
    </Container>
  );
}
