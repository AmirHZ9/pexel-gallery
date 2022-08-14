import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import fetchSearchPhotos from "../redux/search/searchAction";
import Loader from "./shared/Loader";
import Photo from "./shared/Photo";

import styles from "../style/photos.module.css";
export default function Search() {
  const params = useParams();
  const photos = useSelector((state) => state.searchState);
  const dispatch = useDispatch();
  const searchParams = params.search;
  useEffect(() => {
    if (!photos.photos.length || params.search !== photos.query)
      dispatch(fetchSearchPhotos(searchParams,1));
  }, [searchParams]);

  if (photos.loading) return <Loader />;
  return (
    <div className={styles.photos}>
      <h1>{photos.query.toUpperCase()}</h1>
      {photos.photos.map((photo) => (
        <Photo photoData={photo} key={photo.id} />
      ))}
    </div>
  );
}
