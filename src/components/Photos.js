import React, { useContext } from "react";
import { photosContext } from "../PhotosContextProvider";
import Photo from "./shared/Photo";
export default function Photos() {
  const photos = useContext(photosContext);
  console.log(photos);
  return (
    <div
      style={{ display: "flex", flexWrap: "wrap", justifyContent: "center" }}
    >
      {photos.map((item) => (
        <Photo key={item.id} photoData={item} />
      ))}
    </div>
  );
}
