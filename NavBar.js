import React from "react"
import "./NavBar.css";
import {FaHome} from "react-icons/fa";
import {BiUser} from "react-icons/bi"
import {BsBook} from "react-icons/bs"
import {MdCleaningServices} from "react-icons/md"
import {ImFolderOpen} from "react-icons/im"
import {useState} from "react";



export default function NavBar(){
 const [activeState,setActiveState] = useState("a");
     
       
        
  return (
    <nav>
   <div className="navBtn">
      <a href ="#"className="navbarbtn "onClick={()=> setActiveState("#")}id={activeState==="#"?"active":""}>< FaHome/></a>
      
      <a href ="#aboutme"className="navbarbtn "onClick={()=> setActiveState("#aboutme")}id={activeState==="#aboutme"?"active":""}>< BiUser/></a>
      
      <a href ="#experience"className="navbarbtn "onClick={()=> setActiveState("#experience")}id={activeState==="#experience"?"active":""}>< BsBook/></a>
      
      <a href ="#services"className="navbarbtn "onClick={()=> setActiveState("#services")
      }id={activeState==="#services"?"active":""}>< MdCleaningServices/></a>
      
      <a href ="#portfolio"className="navbarbtn "onClick={()=> setActiveState("#portfolio")}id={activeState==="#portfolio"?"active":""}>< ImFolderOpen/></a>
      
     </div>
   
   
   </nav>
    
    )
  
  
  
  
}




