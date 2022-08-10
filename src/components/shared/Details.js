import React from "react";
import { useSelector } from "react-redux";
import { useParams } from "react-router-dom";
export default function Details() {
  const params = useParams();
  const photos = useSelector((state) => state.photosState.photos);
  const filterItem = photos.filter((item) => item.id == params.id);

  return (
    <div>
      {filterItem.map((item) => (
        <div key={item.id}>
          <h1>{item.alt}</h1>
          <img src={item.src.portrait} alt="" style={{"width":"80%"}}/>
        </div>
      ))}
    </div>
  );
}
 