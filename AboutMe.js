import React from "react"
import "./AboutMe.css"
import meAbout from "../Assets/me-about.jpg"
import {FaMedal} from "react-icons/fa"
import {HiUsers} from "react-icons/hi"
import {ImFolder} from "react-icons/im"


export default function AboutMe(){
  
  return (
    <section id="aboutme">
      <div className="about__container">
        <div className="aboutme__header">  <h4>Get to know</h4>
          <h1>About me</h1>
        </div>
        <div className="aboutImage__container">
        <img src={meAbout}alt=""className="aboutMeImg"/>
        </div>
        
        
        <div className="aboutmecard__container">
          <article className="article1 aboutMeCards">
          <FaMedal/>
         <h1>Experience</h1>
         <h3>3+ yrs working</h3>
          
          </article>
          
          <article className="article2 aboutMeCards">
          
            <HiUsers/>
          <h1>Clients</h1>
          <h3>300+ Worldwide</h3>
          
          
          </article>
          
          <article className="article3 aboutMeCards">
          <ImFolder/>
          <h1>Projects</h1>
          <h3>70+ completed</h3>
       
          
          
          </article>
          
  
        </div>
        <div className="pContainer">
        
         <article className="article4">
          
   <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris sit amet velit eu odio posuere elementum quis sed eros. Nullam efficitur accumsan sollicitudin. In consectetur faucibus ipsum vel cursus. Curabitur</p>
          
          </article>
          
        
           
        </div>
               <div className="letsTalk__container">
          <a href="#Contacts"className="letsTalk">Lets talk</a>
               </div>
      </div>
    </section>
  
    
    
    )
  
  
  
  
}




