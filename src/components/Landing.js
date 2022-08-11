import React,{useState} from "react";
import { useDispatch } from "react-redux";
import styles from "../style/landing.module.css";
import fetchPhotos from "../redux/photos/photosAction";

import image from "../assets/images/pexels.jpeg";
import { Link } from "react-router-dom";
export default function Landing() {

  const [search, setSearch] = useState("");
  const dispatch = useDispatch();

  return (
    <div className={styles.landing}>
      <img src={image} alt="" className={styles.landingImage} />
      <div className={styles.landingMain}>
        <h1 className={styles.text}>The best free stock photos, royalty free images & videos shared by creators.</h1>
        <div className={styles.searchContainer}>
        <input type="text" placeholder="Search for free photos" className={styles.landingSearchBox} value={search} onChange={event => setSearch(event.target.value)}/>
        <button
        className={styles.searchBtn}
        onClick={() => dispatch(fetchPhotos(search))}
      >
        <i className="bi bi-search"></i>
      </button>

        </div>
      <ul className={styles.linkList}>
        <li>Trending: </li>
        <li onClick={() => dispatch(fetchPhotos('coffee'))}> coffee, </li>
        <li onClick={() => dispatch(fetchPhotos('mountain'))}> mountain, </li>
        <li onClick={() => dispatch(fetchPhotos('indian flag'))}> indian flag, </li>
        <li onClick={() => dispatch(fetchPhotos('beach'))}> beach,</li>
        <li onClick={() => dispatch(fetchPhotos('nature'))}> nature</li>

      </ul>
      </div>
    </div>
  );
}
