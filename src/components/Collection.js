import React from "react";
import { useSelector } from "react-redux";
import {  Container, Grid, Typography } from "@mui/material";
import Photo from "./shared/Photo";
export default function Collection() {
  const collection = useSelector(
    (state) => state.collectionState.photosSelected
  );

  return (
    <Container maxWidth="lg">
      <Grid container spacing={2}>
        <Grid item xs={12} m={3}>
          <Typography
            component="h1"
            variant="h4"
            fontWeight={700}
            sx={{ borderBottom: "1px solid black", textAlign: "center" }}
          >
            selected images
          </Typography>
        </Grid>

        {collection.map((item) => (
          <Grid item  xs={12} sm={6} md={4} lg={3}>
            <Photo photoData={item}/>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
