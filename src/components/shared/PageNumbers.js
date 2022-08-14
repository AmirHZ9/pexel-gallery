import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";
import styles from "../../style/pagesNumber.module.css";
import PaginatedItems from "./Paginating";
import Pagination from '@mui/material/Pagination';
import PaginationItem from '@mui/material/PaginationItem';


export default function PageNumbers() {
  const photos = useSelector((state) => state.searchState);
  const [focus, setFocus] = useState(false);
  const [number,setNumber] = useState([]);
//   for (let i = 1; i <= 20; i++) {
//     number.push(i);
//   }


//   console.log(focus);
  return (
    <div className={styles.pageNumbers}>
      {/* {number.map((item) => (
        <Link
          className={ styles.deActiveLinks }
   
       
          to={`page/${photos.query ? photos.query : "nature"}/${item}`}
          key={item}
        >
          {item}
        </Link>
      ))} */}
      {/* <PaginatedItems components={'first'='1'} component="Link" node selected='true'/> */}
      {/* <Pagination
  count={10}
  onChange={e => setNumber(e.target.currentText)}
  to={`page/${photos.query ? photos.query : "nature"}/${number}`}
  renderItem={(item) => (
    <PaginationItem
    
    component="Link"
    {...item}
    />
  )} */}
{/* /> */}
    </div>
  );
}
