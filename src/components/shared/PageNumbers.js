import React, { useState,useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "../../style/pagesNumber.module.css";
import { Pagination } from "@mui/material";
export default function PageNumbers() {
  const photos = useSelector((state) => state.searchState);
  const [number, setNumber] = useState(1);
// useEffect(() => {
//     setNumber(event.target.innerText)
// }, [number]);
const getNumberHandler = async(event) => {
  const paginationNumber = event.target.innerText;
  
  setNumber(await paginationNumber); 
  console.log(paginationNumber) 
};
  return (
    <div className={styles.pageNumbers}>
      <Link to={`page/${photos.query ? photos.query : "nature"}/${number}`} onClick={getNumberHandler}>
        <Pagination
          count={20}
          defaultPage={number}
          boundaryCount={2}
        //   onChange={getNumberHandler}
        />
      </Link>
    </div>
  );
}
