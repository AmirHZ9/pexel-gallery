import React, { useState } from "react";
import { useDispatch } from "react-redux";

import fetchPhotos from "../redux/photos/photosAction";
export default function Navbar() {
  const [search, setSearch] = useState("nature");
  const dispatch = useDispatch();


  return (
    <div>
      <input
        type="text"
        placeholder="search . . ."
        value={search}
        onChange={(event) => setSearch(event.target.value)}
      />
      <button onClick={() => dispatch(fetchPhotos(search))}>search</button>
    </div>
  );
}
