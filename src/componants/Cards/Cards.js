import React from 'react'
import "./cards.scss"
import data from "../../Data/data.json"
import { Link } from 'react-router-dom';

export default function Cards() {
  return (
    <div className='allCards'>
      {data.map (element => (
        <div key={element.id} className='card'>
          <Link to={`/House/${element.id}`} >
          <h3>{element.title}</h3>
          <img className='cover' src={element.cover} alt={element.title}/>
          </Link>
        </div>) )}
    </div>
     
  ) 

  
}