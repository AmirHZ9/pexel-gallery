import React,{useEffect} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import fetchPhotos from "../redux/photos/photosAction";
import Loader from './shared/Loader';
import Photo from './shared/Photo';

import styles from "../style/photos.module.css"
export default function Search() {
    const params = useParams()
    const  photos= useSelector(state => state.photosState) 
    const dispatch = useDispatch()
    const searchParams = params.search
    console.log(searchParams)
useEffect(() => {

    dispatch(fetchPhotos(searchParams)) 
    
}, [searchParams]);
console.log(photos.photos)
if(photos.loading)  return <Loader/>
  return (
    <div className={styles.photos}>
        {
            photos.photos.map(photo =>  <Photo photoData={photo}/> )
        }
      

    </div>
  )
}
