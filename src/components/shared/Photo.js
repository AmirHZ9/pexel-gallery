import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//Functions
import { isInCollection } from "../../func/function";

// Action
import { addToList } from "../../redux/collection/collectionAction";
// Styles
import styles from "../../style/photo.module.css";

export default function Photo({ photoData }) {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collectionState);

  const { src, alt, photographer, id } = photoData;
  return (
    <div className={styles.photo}>
      <Link to={`/detail/${alt}/${id}`}>
        <img src={src.portrait} alt={alt} lazy="load" />
      </Link>
      <div className={styles.topSection}>
        {isInCollection(collection, photoData) ? (
          <button onClick={() => dispatch(addToList(photoData))}>
            <i className="bi bi-file-earmark-minus-fill"></i>
          </button>
        ) : (
          <button onClick={() => dispatch(addToList(photoData))}>
            <i className="bi bi-file-earmark-plus"></i>
          </button>
        )}
        <button>
          <i className="bi bi-heart"></i>
        </button>
      </div>
      <div className={styles.bottomSection}>
        <span className={styles.alt}>{photographer}</span>
        <a href={src.portrait} download>
          <i className="bi bi-download"></i>
        </a>
      </div>
    </div>
  );
}
