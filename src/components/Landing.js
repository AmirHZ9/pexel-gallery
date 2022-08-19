import React, { useState } from "react";
import styles from "../style/landing.module.css";
import image from "../assets/images/pexels.jpeg";
import { Link } from "react-router-dom";
export default function Landing() {
  const [search, setSearch] = useState("");


  return (
    <div className={styles.landing}>
      <img src={image} alt="" className={styles.landingImage} />
      <div className={styles.landingMain}>
        <h1 className={styles.text}>
          The best free stock photos, royalty free images & videos shared by
          creators.
        </h1>
        <div className={styles.searchContainer}>
          <input
            type="text"
            placeholder="Search for free photos"
            className={styles.landingSearchBox}
            value={search}
            onChange={(event) => setSearch(event.target.value)}
          />
           <Link
              to={`search/${search}`}
              className={styles.searchBtn}
              onClick={() => setSearch('')}
            >
              <i className="bi bi-search"></i>
            </Link>
        </div>
        <ul className={styles.linkList}>
          <li>Trending: </li>
          <li>
            <Link to="search/coffee"> coffee, </Link>
          </li>
          <li>
            <Link to="search/mountain"> mountain, </Link>
          </li>
          <li>
            <Link to="search/indianflag"> indian flag, </Link>
          </li>
          <li>
            <Link to="search/beach"> beach,</Link>
          </li>
          <li>
            <Link to="search/nature"> nature</Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
