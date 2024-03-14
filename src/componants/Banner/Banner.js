import React from 'react'
import { useLocation } from 'react-router-dom'
import "./banner.scss"
import BannerHome from "../../assets/BannerHome.png"
import BannerAbout from "../../assets/BannerAbout.png"

export default function Banner() {
const location= useLocation();
  return (
    <div className='banner'>
        {location.pathname === "/" && <h2>Chez vous, partout et ailleurs</h2>}     
        <img src= {location.pathname === "/" ?BannerHome:BannerAbout} alt='bannerHome'/>         
    </div>
  )
}
 