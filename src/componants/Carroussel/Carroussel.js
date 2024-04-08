import React, { useState } from 'react'
import "./carroussel.scss"


export default function Carroussel({pictures}) {
  const [index, setIndex] = useState(0)
 
  function handleNext(){
    setIndex(index+1)
    
    if(index === pictures.length-1){
      setIndex(0);
    }
  }

  function handlePrev(){
    setIndex(index-1)
    
    if(index === 0){
      setIndex(pictures.length-1);
    }
  }


  return ( 
    <div className='carousel'>
      <img src={pictures[index]} alt='img-Carroussel'/>
      <i onClick={handlePrev} className="fa-solid fa-chevron-left"></i>
      <i onClick={handleNext} className="fa-solid fa-chevron-right"></i>
    </div>
    
  )

}
