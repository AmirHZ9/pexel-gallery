import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams, Link } from "react-router-dom";
//Action
import fetchPhotos from "../redux/photos/photosAction";
//Component
import Photo from "./shared/Photo";
import Loader from "./shared/Loader";
//Styles
import { Box, Grid, Typography, Container, Button } from "@mui/material";
import styles from "../style/photos.module.css";
import AppPaginating from "./shared/AppPaginating";


export default function Search() {
  const params = useParams();
  const photos = useSelector((state) => state.photosState);
  const dispatch = useDispatch();
  const searchParams = params.search;

  useEffect(() => {
    dispatch(fetchPhotos(searchParams, 1));

  }, [searchParams]);
  if (photos.loading)
    return (
      <Box className={styles.loader}>
        <Loader />
      </Box>
    );

  if (!photos.photos.photos.length) {
    return (
      <Container maxWidth="xl">

      <Grid container m={6} justifyContent="start">
        <Grid item xs={6} mb={3}>
          <Typography
            component="h1"
            variant="h3"
            fontWeight={600}
            fontSize="33px"
            lineHeight="40px"
            color="#2c343e"
           
            >
            We couldn’t find anything for "{photos.query}".Try to refine your
            search.
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <Link to="/" >
            <Button variant="contained" className={styles.mainLink} sx={{"padding":'16px',"fontWeight":700,"fontSize":"16px","border":"1px solid black",letterSpacing: "-.015em"}}>Go to main page</Button>
          </Link>
        </Grid> 
      </Grid>
            </Container>
    );
  }
  return (
    <Container maxWidth="xl">
      <Grid container spacing={2}>
        <Grid item xs={12} mb={2}>
          <Typography component="h1" variant="h4" fontWeight={700}>
            {photos.query.toUpperCase()}
          </Typography>
        </Grid>
        {photos.photos.photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
            <Photo photoData={photo} />
          </Grid>
        ))}
      </Grid>
<AppPaginating/>
    </Container>
  );
}
