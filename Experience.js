import React from "react"
import "./Experience.css"
import  {BsFillPatchCheckFill} from "react-icons/bs"

export default function Experience(){
  
  return (
    <section id="experience">
    <div className="experience__container">
     <h3 className="exph">What skills i have</h3>
     <h1 className="exph">Experience</h1>
         <div className="frontend__container">
         
          <h1>  Frontend Developer</h1>
          
          <div className="expwrap">
          <div className="expcontent1">
          <div className="expcheck">
          <BsFillPatchCheckFill />
          <h3>Html</h3>
          </div>
          <h5>Intermediate</h5>
          
          
          <div className="expcheck">
          <BsFillPatchCheckFill />
          <h3>Css</h3>
          </div>
          <h5>Intermediate</h5>
          
          
          <div className="expcheck">
          <BsFillPatchCheckFill />
          <h3>JavaScript</h3>
          </div>
          <h5>Intermediate</h5>
          </div> 
          
          <div className="expcontent2">
          <div className="expcheck">
          <BsFillPatchCheckFill />
          <h3>React</h3>
          </div>
          <h5>Intermediate</h5>
          
          
          <div className="expcheck">
          <BsFillPatchCheckFill />
          <h3>Bootstrap</h3>
          </div>
          <h5>Intermediate</h5>
          
          
          <div className="expcheck">
          <BsFillPatchCheckFill />
          <h3>Tailwind</h3>
          </div>
          <h5>Intermediate</h5>
          </div>
          </div>
          
         
         
         
         </div>
         
         
         <div className="backend__container">
         
         
          <h1>Backend Developer</h1>
            
            
           <div className="backend__wrap"> 
           <div className="backend__content">
           
           <div className="backend__check">
           <BsFillPatchCheckFill />
           <h3>Nodejs</h3>
          </div>
          <h5>Intermediate</h5>
          
          
          <div className="backend__check php" >
          <BsFillPatchCheckFill />
          <h3>Php  </h3>
          </div>
          <h5>Intermediate</h5>
          
          
          <div className="backend__check">
          <BsFillPatchCheckFill />
          <h3>Python</h3>
           </div>
          <h5>Intermediate</h5>
          </div>
          
            <div className="backend__content2">
            
          <div className="backend__check mongodb">
          <BsFillPatchCheckFill />
          <h3>Mongodb</h3>
          </div>
          <h5>Intermediate</h5>
          
          <div className="backend__check">
          <BsFillPatchCheckFill />
          <h3>MySQL</h3>
          </div>
          <h5>Intermediate</h5>
          
          <div className="backend__check">
          <BsFillPatchCheckFill />
          <h3>Django</h3>
          </div>
          <h5>Intermediate</h5>
           </div>
           </div>
         
         
         
         </div>
         
      </div>   
    </section>
 
    
    
    )
  
  
}




