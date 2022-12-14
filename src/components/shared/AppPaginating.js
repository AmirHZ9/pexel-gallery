import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
//style
import Pagination from "@mui/material/Pagination";
import styles from "../../style/pagesNumber.module.css";
import PaginationItem from "@mui/material/PaginationItem";
import { Grid } from "@mui/material";
export default function AppPaginating() {
  const photos = useSelector((state) => state.photosState);
  const [pageNum, setPageNum] = useState("");
  const [numberOfPages, setNumbeOfPages] = useState(
    photos.photos.total_results
  );
  useEffect(() => {
    if (
      window.location.href.split("/")[5] == undefined ||
      window.location.href.split("/")[5] > 200
    ) {
      setPageNum(1);
    } else if (window.location.href.split("/")[5]) {
      setPageNum(window.location.href.split("/")[5]);
    }
    setNumbeOfPages(photos.photos.total_results);
  }, [photos]);
  const handleChange = (event, value) => {
    setPageNum(value);
  };
  if (!photos.photos.photos.length) return "";

  return (
    <Grid id="appPagination" container className={styles.pageNumbers}>
      <Grid item m={8}>
        <Pagination
          count={Math.ceil(numberOfPages / 50)}
          onChange={handleChange}
          page={+pageNum}
          renderItem={(item) => (
            <Link
              style={{ borderRadius: "50%" }}
              to={`/${photos.query ? photos.query : "nature"}/page/${
                item.page
              }`}
            >
              {<PaginationItem {...item} component="p" />}
            </Link>
          )}
        />
      </Grid>
    </Grid>
  );
}
