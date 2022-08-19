import React,{useEffect} from "react";
import { useSelector } from "react-redux";
import { Box, Container, Grid, Typography } from "@mui/material";
import Photo from "./shared/Photo";
export default function Collection() {
  const collection = useSelector(
    (state) => state.collectionState.photosSelected
    );
    useEffect(() => {
        
    }, [])
  if (!collection.length)
    return (
      <Box component="div" textAlign="center" m={6}>
        <h1>The Collection is empty.</h1>
      </Box>
    );
  return (
    <Container maxWidth="lg">
      <Grid container spacing={2} mb={6}>
        <Grid item xs={12} m={6}>
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
          <Grid item xs={12} sm={6} md={4} lg={3} key={item.id}>
            <Photo photoData={item} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
