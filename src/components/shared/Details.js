import React from "react";
import { Container, Grid, Typography, Box, Avatar } from "@mui/material";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import Photo from "./Photo";
import CameraAltIcon from '@mui/icons-material/CameraAlt';


export default function Details() {
  const params = useParams();
  const photos = useSelector((state) => state.photosState.photos);
  const searchPhotos = useSelector((state) => state.searchState.photos);
  const filterPhotos = photos.filter((item) => item.id == params.id);
  const filterSearch = searchPhotos.filter((item) => item.id == params.id);

  return (
    <Container maxWidth="lg">
      <Grid container justifyContent="center">
        <Grid item xs={12} mt={3}>
          <Typography component="h1" variant="5" fontWeight={700}>
            {params.alt}
          </Typography>
        </Grid>

        {filterSearch.length
          ? filterSearch.map((item) => (
              <Grid item key={item.id} xs={12} sm={8} md={6} lg={5} m={3}>
                <img src={item.src.portrait} alt={item.alt} />
                <Box component="div" display="flex" alignItems="center" mt={2}>
                <Avatar><CameraAltIcon/></Avatar>
                <Typography component="p" variant="p" sx={{marginLeft:"10px"}} >
                {item.photographer}

                </Typography>

                </Box>
              </Grid>
            ))
          : filterPhotos.map((item) => (
              <Grid item key={item.id} xs={12} sm={8} md={6} lg={5} m={3}>
                <img src={item.src.portrait} alt={item.alt} />
              </Grid>
            ))}
      </Grid>

      <Grid container xs={12}>
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
        {searchPhotos.map((item) => (
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Photo photoData={item} />
      
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
