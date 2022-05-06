import React from "react"
import CV from  "../Assets/cv.pdf"

export default function HeaderBtn(){
  
  return (
    
    <div className="headerbtn">
         <a href={CV} download className="btn">Download CV</a>
         <a href="#Contacts"className=" btn-primary">Contact me now!</a>
          
    </div>
    
    
    
    )
  
  
}


