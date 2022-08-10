import React from "react";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
// Action
import { addToList } from "../../redux/collection/collectionAction";
// Styles
import styles from "../../style/photo.module.css";

export default function Photo({ photoData }) {
  const dispatch = useDispatch();

  const { src, alt, photographer, id } = photoData;
  return (
    <div className={styles.photo}>
      <Link to={`/detail/${alt}/${id}`}>
        <img src={src.portrait} alt="" lazy="load" />
      </Link>
      <div className={styles.topSection}>
        <button onClick={() => dispatch(addToList(photoData))}>
          <i className="bi bi-file-earmark-plus"></i>
        </button>
        <button>
          <i className="bi bi-heart"></i>
        </button>
      </div>
      <div className={styles.bottomSection}>
        <span className={styles.alt}>{photographer}</span>
        <button>
          <i className="bi bi-download"></i>
        </button>
      </div>
    </div>
  );
}
