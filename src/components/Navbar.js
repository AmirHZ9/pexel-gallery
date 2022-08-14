import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// PixelsLogo
import pixels from "../assets/logos/pixel.png";
// styles
import styles from "../style/navbar.module.css";
import Landing from "./Landing";
export default function Navbar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();
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
      <div className={scroll ? styles.navbar:styles.navbarMoved}>
        <div className={styles.searchSection}>
          <img src={pixels} alt="" className={styles.pixel} />
          <span className={styles.title}>Pixels</span>
          <div
            className={
              scroll ?  styles.searchBoxOnTop : styles.searchBoxMovedDown
            }
          >
            <input
              type="text"
              placeholder="Search for free photos"
              value={search}
              onChange={(event) => setSearch(event.target.value)}
              className={styles.searchInput}
            />
            <Link
              to={`search/${search}`}
              className={styles.searchBtn}
            >
              <i className="bi bi-search"></i>
            </Link>
          </div>
        </div>

        <Link to="/collection" className={styles.collectionLink}>
          collection
        </Link>
      </div>
      <Landing />
    </>
  );
}
