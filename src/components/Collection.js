import React from "react";
import styles from "../style/collection.module.css";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToList } from "../redux/collection/collectionAction";
export default function Collection() {
  const collection = useSelector(
    (state) => state.collectionState.photosSelected
  );
  const dispatch = useDispatch();

  return (
    <>
      <h1 className={styles.title}>selected images</h1>
    <div className={styles.collection}>
      {collection.map((item) => (
        <div key={item.id} className={styles.photo}>
          <Link to={`/detail/${item.alt}/${item.id}`}>
            <img src={item.src.portrait} alt={item.alt} />
          </Link>
          <div className={styles.topSection}>
            <button onClick={() => dispatch(addToList(item))}>
              <i className="bi bi-file-earmark-minus-fill"></i>
            </button>
            <button>
          <i className="bi bi-heart"></i>
        </button>
          </div>
          
          <div className={styles.bottomSection}>
              <span className={styles.alt}>{item.photographer}</span>
              <button>
                <i className="bi bi-download"></i>
              </button>
            </div>
        </div>
      ))}
    </div>
    </>
  );
}
