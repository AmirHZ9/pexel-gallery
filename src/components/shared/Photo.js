import React ,{useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
//Functions
import { isInCollection } from "../../func/function";
// Action
import { addToList } from "../../redux/collection/collectionAction";
// Styles
import styles from "../../style/photo.module.css";
import Loader from "./Loader";

export default function Photo({ photoData }) {
  const dispatch = useDispatch();
  const collection = useSelector((state) => state.collectionState);
  const [imageLoaded,setImageLoaded] = useState(false)
const loaderHandler =(event) =>{
  setImageLoaded({
    ...imageLoaded,[event.target.alt]:true
  })

}
  const { src, alt, photographer, id } = photoData;
  return (
    <div className={styles.photo}>
      <Link to={`/detail/${alt}/${id}`}>
        {
          imageLoaded.alt ?   <h1>loading</h1>  :<img src={src.portrait} alt={alt} lazy="load" onLoad={loaderHandler}/>
        }
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
