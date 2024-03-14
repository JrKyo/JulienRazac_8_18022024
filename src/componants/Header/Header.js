import React from 'react'
import "./header.scss"

export default function Header() {
  return (
    <header>
     <img src='./images/Logo_header.png' alt='logoKaza'/>
     <div className='nav'>
      <a href='/'>Accueil</a>
      <a href='/About'>A Propos</a>
     </div>
    </header>
  )
}