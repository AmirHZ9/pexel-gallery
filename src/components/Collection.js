import React from "react";
import { useSelector } from "react-redux";
export default function Collection() {
  const collection = useSelector(
    (state) => state.collectionState.photosSelected
  );

  return (
    <div>
      {collection.map((item) => (
        <div key={item.id}>
          <img src={item.src.portrait} alt={item.alt} />
        </div>
      ))}
    </div>
  );
}
 