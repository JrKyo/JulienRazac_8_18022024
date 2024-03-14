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
        <i onClick={toggle} class="fa-solid fa-chevron-up"></i>
      </div>
      
        <div className={open? "content-show" : "content-parent"}>
          <span className='content'>{description}</span>
        </div>
    </div>
  );
}