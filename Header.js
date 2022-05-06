import React from "react"
import "./Header.css"
import HeaderBtn from "./HeaderBtn.js"
import Mypic from "../Assets/me.png"
import SocMed from "./SocMed.js"


import NavBar from "../NavBar/NavBar.js"

export default function Header(){
  
  return (
  <header>
     <div className="container header__container">
        <h3>Hi I am</h3>
        <h1>Lorem Ipsum</h1>
        <h5> Fullstack Developer</h5>
        <HeaderBtn />
           <div className="me"><img className="mePic" src={Mypic}alt="me"/></div>
        <SocMed/>
        <NavBar/>
     </div>  
  </header>
    
    )
  
  
  
  
}




