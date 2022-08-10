import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
// Actions
import fetchPhotos from "../redux/photos/photosAction";
// Components
import Landing from "./Landing";
// Logo
import Photo from "./shared/Photo";

export default function Photos() {
  const photos = useSelector((state) => state.photosState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (!photos.photos.length) dispatch(fetchPhotos("nature"));
  }, []);

  return (
    <>
      <Landing />
      <div
        style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
      >
        {photos.loading ? (
          <h1>Loading</h1>
        ) : photos.error ? (
          <h1>Use VPN</h1>
        ) : (
          photos.photos.map((item) => <Photo key={item.id} photoData={item} />)
        )}
      </div>
    </>
  );
}
