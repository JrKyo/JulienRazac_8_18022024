import React,{useState} from 'react'
import "./collapse.scss"

export default function Collapse({title, description}) {
  const [open, setOPen] = useState(false);
  const toggle = () => {
    setOPen(!open);
  };
  
  return (
    <div className='contenair-collapse'>
      
      <div className='title'>
        <h4>{title}</h4>
        <i onClick={toggle} className={open?"fa-solid fa-chevron-up fa-chevron-active":"fa-solid fa-chevron-up"}></i>
      </div>
      
        <div className={open? "content-show" : "content-parent"}>
        {typeof(description)=="string"?<span className='content'>{description}</span>:description.map((element)=> <li className='list'>{element}</li>)}
        </div>
    </div>
  );
}