import { AppBar, Container, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
// PixelsLogo
import pixels from "../assets/logos/pixel.png";
// styles
import styles from "../style/navbar.module.css";
import Landing from "./Landing";
export default function Navbar() {
  const [search, setSearch] = useState("");
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    document.addEventListener("scroll", () => {
      const scrollCheck = window.scrollY < 50;
      if (scrollCheck !== scroll) {
        setScroll(scrollCheck);
      }
    });
  });

  return (
    <>
      <Landing />
      <AppBar
        sx={{ boxShadow: "none", color: "white" }}
        className={scroll ? styles.appBar : styles.appBarMoved}
      >
        <Container
          maxWidth="xl"
          className={scroll ? styles.navbar : styles.navbarMoved}
        >
          <Grid
            container
            display="flex"
            alignItems="center"
            justifyContent="space-around"
          >
            <div className={styles.searchSection}>
              <Link to="/home" className={styles.logo}>
                <img src={pixels} alt="" className={styles.pixel} />
                <span className={styles.title}>Pixels</span>
              </Link>
              <div
                className={
                  scroll ? styles.searchBoxOnTop : styles.searchBoxMovedDown
                }
              >
                <input
                  type="text"
                  placeholder="Search for free photos"
                  value={search}
                  onChange={(event) => setSearch(event.target.value)}
                  className={styles.searchInput}
                />
                <Link to={`search/${search}`} className={styles.searchBtn} onClick={() => setSearch('')}>
                  <i className="bi bi-search"></i>
                </Link>
              </div>
            </div>

            <Link to="/collection" className={styles.collectionLink}>
              collection
            </Link>
          </Grid>
        </Container>
      </AppBar>
    </>
  );
}
