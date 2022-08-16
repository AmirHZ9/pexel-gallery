import React from "react";
import styles from "../style/collection.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToList } from "../redux/collection/collectionAction";
import { Box, Container, Grid, Typography } from "@mui/material";
export default function Collection() {
  const collection = useSelector(
    (state) => state.collectionState.photosSelected
  );
  const dispatch = useDispatch();

  return (
    <Container maxWidth="xl">
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
          <Grid
            item
            xs={12}
            sm={6}
            md={4}
            key={item.id}
            className={styles.photo}
          >
            <Link to={`/detail/${item.alt}/${item.id}`}>
              <img src={item.src.portrait} alt={item.alt} />
            </Link>

            <Box m={2} className={styles.topSection}>
              <button onClick={() => dispatch(addToList(item))}>
                <i className="bi bi-file-earmark-minus-fill"></i>
              </button>
              <button>
                <i className="bi bi-heart"></i>
              </button>
            </Box>

            <Box className={styles.bottomSection}>
              <Typography component="p" variant='p' fontWeight={700} fontSize="22px">{item.photographer}</Typography>
              <button>
                <i className="bi bi-download"></i>
              </button>
            </Box>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
