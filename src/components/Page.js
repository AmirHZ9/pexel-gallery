import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { useParams } from "react-router-dom";
import fetchSearchPhotos from "../redux/search/searchAction";
import Photo from "./shared/Photo";
import { Grid } from "@mui/material";
import { Container } from "@mui/system";
export default function Page() {
  const params = useParams();
  const dispatch = useDispatch();
  const photos = useSelector((state) => state.searchState);
  useEffect(() => {
    dispatch(
      fetchSearchPhotos(
        params.query.length ? params.query : "nature",
        params.page
      )
    );
  }, [params.page, params.query]);
  if (photos.loading) return <h1>loading</h1>;
  return (
    <Container maxWidth="xl">
    <Grid container
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {photos.photos.map((item) => (
        <Grid item xs={12} sm={6} md={4} lg={3} key={item.id} >
          <Photo photoData={item} />

        </Grid>
      ))}
    </Grid>
    </Container>
  );
}
