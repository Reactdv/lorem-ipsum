import React from "react"
import "./Contacts.css"

import {MdEmail} from "react-icons/md"
import {BsMessenger} from "react-icons/bs"
import {BsWhatsapp} from "react-icons/bs"



export default function Contacts(){
  
  return (
    <section id="Contacts">
    
        <h3 className="reach__me__out">
        Reach me out</h3>
        <h1>Contact me now!</h1>
        
        <div className="contact__wrap">
        
        <div className="contact__apps">
        
        
        
        
        <div className="contact__contents contactme__in__email">
        
        <div className="contact__content__icon"> 
        <MdEmail/> </div>
        <h1>Email</h1>
        <h4>loremipsum@gmail.com</h4>
        <h3>Send message</h3>
        
        </div>
        
        <div className="contact__contents contactme__in__messenger">
      <div className="contact__content__icon">  <BsMessenger /> </div>
        <h1>Messenger</h1>
        <h4>loremipsum</h4>
        <h3>Send message</h3>
        </div>
        
        <div className="contact__contents contactme__in__whatsapp">
        
       <div className="contact__content__icon"> 
       <BsWhatsapp /> </div>
        <h1> Whats app</h1>
        <h4>123-456-7890</h4>
        <h3>Send message</h3>
       
       
        </div>
        
        </div>
        
        <div className="sendme__email">
        
        <input type="text"placeholder="Your fullname"className="sendme__email__content1"></input>
        <input type="email"placeholder="Your email"className="sendme__email__content2"></input>
        <input type="text-area"placeholder="Your message"className="sendme__email__content3"></input>
        <button className="sendme__email__btn">Send message</button>
        
        
        
        </div>
        
        
        
        
        </div>
    
    </section>
 
    
    
    )
  
  
  
  
}




