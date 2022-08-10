import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import fetchPhotos from "../redux/photos/photosAction";
import Photo from "./shared/Photo";
export default function Photos() {
  const photos = useSelector((state) => state.photosState);
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchApi = async () => {
      await dispatch(fetchPhotos('nature'));
    };

    fetchApi();
  }, []);


  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >

  

      {photos.loading ? (
        <h1>Loading</h1>
      ) : photos.error ? (
        <h1>Error</h1>
      ) :
      
      (
        photos.photos.map((item) => <Photo key={item.id} photoData={item} />)
      )}
    </div>
  );
}
