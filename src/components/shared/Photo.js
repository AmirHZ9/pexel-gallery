import React from "react";
import { Link } from "react-router-dom";
import styles from "../../style/photo.module.css";
export default function Photo({ photoData }) {
  const { src, url, alt, photographer } = photoData;
  return (
    <div className={styles.photo}>
      <Link to={url}>
        <img src={src.portrait} alt="" lazy="load" />
      </Link>
      <div className={styles.topSection}>
        <button><i className="bi bi-file-earmark-plus"></i></button>
        <button><i className="bi bi-heart"></i></button>
      </div>
      <div className={styles.bottomSection}>
        <span className={styles.alt}>{photographer}</span>
        <button><i className="bi bi-download"></i></button>
      </div>
    </div>
  );
}
