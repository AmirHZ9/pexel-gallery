import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// Action
import fetchPhotos from "../redux/photos/photosAction";
// PixelsLogo
import pixels from "../assets/logos/pixel.png";
// styles
import styles from "../style/navbar.module.css";

export default function Navbar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={styles.navbar}>
      <div className={styles.searchSection}>
      <img src={pixels} alt="" className={styles.pixel} />
      <span className={styles.title}>Pixels</span>

      <input
        type="text"
        placeholder="Search for free photos"
        value={search}
        onChange={(event) => setSearch(event.target.value)}
        className={styles.searchInput}
      />
      <button
        className={styles.searchBtn}
        onClick={() => dispatch(fetchPhotos(search))}
      >
        <i className="bi bi-search"></i>
      </button>
      </div>
 
      <ul className={styles.list}>
        <Link to="/collection">collection</Link>
        <Link to="#"> Join</Link>
      </ul>

    </div>
  );
}
