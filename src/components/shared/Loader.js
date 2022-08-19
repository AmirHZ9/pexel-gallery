import React from 'react'
import { TailSpin } from  'react-loader-spinner'

export default function Loader() {
  return (
    <div style={{display:'flex',justifyContent:"center",margin:"100px 0"}}>

<TailSpin
    height = "120"
    width = "120"
    radius = "9"
    color = '#D63D3C'
    ariaLabel = 'three-dots-loading'     
    />
    </div>
  )
}


