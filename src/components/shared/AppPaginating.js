import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../../style/pagesNumber.module.css";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
export default function AppPaginating(props) {
  const photos = useSelector((state) => state.searchState);
  const [pageNum, setPageNum] = useState("");

  useEffect(() => {
    if (window.location.href.split("/")[5] == undefined) {
      setPageNum(1);
    } else if (window.location.href.split("/")[5]) {
      setPageNum(window.location.href.split("/")[5]);
    }
  }, [photos]);
  const handleChange = (event, value) => {
    setPageNum(value);
    // }
  };

  if(!photos.photos.length) return ""
  return (
    <div className={styles.pageNumbers}>
      <Pagination
        count={20}
        onChange={handleChange}
        page={+pageNum}
        renderItem={(item) => (
          <Link
            style={{ borderRadius: "50%" }}
            to={`${photos.query ? photos.query : "nature"}/page/${item.page}`}
          >
            {<PaginationItem {...item} component="p" />}
          </Link>
        )}
      />
    </div>
  );
}
