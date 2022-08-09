import React, { createContext } from "react";
import { useState, useEffect } from "react";
import getData from "./Api/Api";
export const photosContext = createContext();
export default function PhotosContextProvider({ children }) {
  const [data, setData] = useState([]);
  const [category,setCategory] = useState('nature')
  const [color,setColor] = useState('blue')

  useEffect(() => {
    const fetchApi = async () => {
      setData(await getData(category,color));
    };

    fetchApi(); 
  }, []);
  
 
  const searchHandler = () => {
    const fetchApi = async () => {
      setData(await getData(category,color));
    };

    fetchApi(); 
  }
  return (
    <div>
        <input type="text" placeholder='search . . .' value={category} onChange ={e => setCategory(e.target.value)} />
      <button onClick={searchHandler}>search</button>
      <photosContext.Provider value={data}>
        {children}
      </photosContext.Provider>
    </div>
  );
}
