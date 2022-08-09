import React from 'react'
import styles from "../../style/photo.module.css" 
export default function Photo({photoData}) {
    const {src,url,alt,photographer} = photoData
  return (
    <div className={styles.photo}>
       <a href={url}><img src={src.portrait} alt="" lazy="load"  /></a> 
        <span className={styles.alt}>{photographer}</span>

    </div>
  )
}
