import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import fetchPhotos from "../redux/photos/photosAction";
// Components
import Loader from "./shared/Loader";
// Logo
import Photo from "./shared/Photo";
//style
import styles from "../style/photos.module.css";
import PageNumbers from "./shared/PageNumbers";

export default function Photos() {
  const photos = useSelector((state) => state.photosState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!photos.photos.length) dispatch(fetchPhotos("nature",1));
  }, []);

  if (photos.loading)
    return (
      <div className={styles.loader}>
        <Loader />
      </div>
    );
  if (photos.Error) return <h1>Use VPN</h1>;

  return (
    <>
    <h1>{photos.query.toUpperCase() }</h1>
      <div className={styles.photos}>
        {photos.photos.map((item) => (
          <Photo key={item.id} photoData={item} />
        ))}
      </div>
    </>
  );
}
