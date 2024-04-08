import React from 'react'
import "./tags.scss"

export default function Tags({tags}) {
  return (
    <div className='allTags'>
        {tags.map (element => (
        <div className='tags'>
            <span>{element}</span>
        </div>
        ) ) 
        }
    </div>
    
  )
}
