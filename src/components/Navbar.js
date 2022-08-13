import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
// Action
import fetchPhotos from "../redux/photos/photosAction";
// PixelsLogo
import pixels from "../assets/logos/pixel.png";
// styles
import styles from "../style/navbar.module.css";
import Landing from "./Landing";
export default function Navbar() {
  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <>
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
          <Link to={`search/${search}`} 
            className={styles.searchBtn}
            // onClick={() => dispatch(fetchPhotos(search))}
          >
            <i className="bi bi-search"></i>
          </Link>
        </div>

    
          <Link to="/collection" className={styles.collectionLink}>collection</Link>
        
  
      </div>
      <Landing />
    </>
  );
}
