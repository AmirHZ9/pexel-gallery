import React from 'react'
import { Link } from 'react-router-dom'
import styles from "../../style/photo.module.css" 
export default function Photo({photoData}) {
    const {src,url,alt,photographer} = photoData
  return (
    <div className={styles.photo}>
       <Link to={url}><img src={src.portrait} alt="" lazy="load"  /></Link> 
        <span className={styles.alt}>{photographer}</span>

    </div>
  )
}
