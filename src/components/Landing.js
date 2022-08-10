import React from "react";
import styles from "../style/landing.module.css";
import image from "../assets/images/pexels.jpeg";
export default function Landing() {
  return (
    <div className={styles.landing}>
      <img src={image} alt="" className={styles.landingImage} />
    </div>
  );
}
