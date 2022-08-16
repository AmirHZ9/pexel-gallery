import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import styles from "../../style/pagesNumber.module.css";
import Pagination from "@mui/material/Pagination";
import PaginationItem from "@mui/material/PaginationItem";
export default function AppPaginating() {
  const photosSearch = useSelector((state) => state.searchState);
  const photos = useSelector((state) => state.photosState);
  const [pageNum, setPageNum] = useState("");
  useEffect(() => {
    if (
      window.location.href.split("/")[5] == undefined ||
      window.location.href.split("/")[5] > 20
    ) {
      setPageNum(1);
    } else if (window.location.href.split("/")[5]) {
      setPageNum(window.location.href.split("/")[5]);
    }
  }, [photos, photosSearch]);
  const handleChange = (event, value) => {
    setPageNum(value);
    // }
  };
  if (!photosSearch.photos.length && !photos.photos.length) return "";
  if (photosSearch.photos.length)
    return (
      <div className={styles.pageNumbers}>
        <Pagination
          count={20}
          onChange={handleChange}
          page={+pageNum}
          renderItem={(item) => (
            <Link
              style={{ borderRadius: "50%" }}
              to={`${photosSearch.query ? photosSearch.query : "nature"}/page/${
                item.page
              }`}
            >
              {<PaginationItem {...item} component="p" />}
            </Link>
          )}
        />
      </div>
    );
  if (photos.photos.length)
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
