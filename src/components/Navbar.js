import React, { useState } from "react";
import { useDispatch } from "react-redux";
import styles from "../style/navbar.module.css";
import fetchPhotos from "../redux/photos/photosAction";
import pixels from "../assets/logos/pixel.png"
export default function Navbar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={styles.navbar}>
      <img src={pixels} alt="" className={styles.pixel} />
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
  );
}
