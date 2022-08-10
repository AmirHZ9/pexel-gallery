import React, { useEffect, useState } from 'react'
import { useSelector } from 'react-redux'
import styles from '../style/landing.module.css'
import image from "../assets/images/pexels.jpeg"
export default function Landing() {
    const photos = useSelector(state => state.photosState)

  return (
    <div className={styles.landing}> 
    <img src={image} alt="" className={styles.landingImage}/>

    </div> 
  )
}

