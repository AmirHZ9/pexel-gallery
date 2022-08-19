import React, { useEffect } from "react";
import { Container, Grid, Typography, Box, Avatar } from "@mui/material";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import CameraAltIcon from "@mui/icons-material/CameraAlt";
import fetchPhotos from "../../redux/photos/photosAction";
import fetchPhotosByID from "../../redux/GetPhotoById/requestByIdAction";
import Loader from "./Loader";
import AppPaginating from "./AppPaginating";

export default function Details() {
  const params = useParams();
  const photos = useSelector((state) => state.photosState);
  const photo = useSelector((state) => state.uniquePhoto);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPhotosByID(params.id));
    dispatch(fetchPhotos(params.alt, 1));
  }, [params.alt]);
  if (photos.loading)
    return (
      <Box component='div'  >
        <Loader />
      </Box>
    );
  if (photo.loading)
    return (
      <Box component='div'  >
        <Loader />
      </Box>
    );

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item xs={12} mt={3}>
          <Typography component="h1" variant="5" fontWeight={700}>
            {params.alt}
          </Typography>
        </Grid>

        <Grid item xs={12} sm={8} md={6} lg={5} m={3}>
          <img src={photo.photos.src.portrait} alt={photo.photos.alt} />
        </Grid>
        <Grid item xs={12} display="flex" alignItems="center">
          <Avatar>
            <CameraAltIcon/>
          </Avatar>
          <Typography component='p' variant="p" fontWeight={700} sx={{marginLeft:"10px"}}>
          {photo.photos.photographer}
          </Typography>
        </Grid>
      </Grid>

      <Grid container>
        <Grid
          item
          xs={12}
          pb={1}
          m={3}
          sx={{ borderBottom: "1px solid black" }}
        >
          <Typography
            component="p"
            variant="h6"
            sx={{ textAlign: "center" }}
            fontWeight={700}
          >
            More like this
          </Typography>
        </Grid>

        {photos.photos.map((photo) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={photo.id}>
            <Photo photoData={photo} />
          </Grid>
        ))}
      </Grid>
      <AppPaginating/>
    </Container>
  );
}
