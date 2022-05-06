import React from "react"
import "./Portfolio.css"
import img1 from "../Assets/portfolio1.jpg"
import img2 from "../Assets/portfolio2.jpg"
import img3 from "../Assets/portfolio3.jpg"
import img4 from "../Assets/portfolio4.jpg"
import img5 from "../Assets/portfolio5.png"
import img6 from "../Assets/portfolio6.jpg"





export default function Portfolio(){
  const data =[
    {
      id:1,
      image:img1,
      title:"crypto currency",
      github:"https://github.com",
      demo:"www.dribbble.com/shots/16654866-Futureswap-Trading-Platform"
      
    },
    
    {
      id:2,
      image:img2,
      title:"trading",
      github:"https://github.com",
      demo:"https://dribbble.com/shots/16750977-Futureswap-Website"
      
    },
    {
      id:3,
      image:img3,
      title:"crypto wallet",
      github:"https://github.com",
      demo:"https://dribbble.com/shots/15912627-Globe-Wallet"
      
    },
    {
      id:4,
      image:img4,
      title:"nft",
      github:"https://github.com",
      demo:"https://dribbble.com/shots/18055765-Meecat-NFT"
      
    },
    
    {
      id:5,
      image:img5,
      title:"play to earn",
      github:"https://github.com",
      demo:"https://dribbble.com/shots/17889864-NFT-Landing-Page"
      
    },
    
    {
      id:6,
      image:img6,
      title:"nft mobile",
      github:"https://github.com",
      demo:"https://dribbble.com/shots/17527964-NFT-Marketplace-App"
      
    },
    
    ]
  return (
     <div id="portfolio">  
           {
            data.map(({id,image,title,github,demo})=>{
              return(
                
                
  <div key={id}className="portfolio__wrap">
     
        <div >
        
        <img className="portfolio__img"src={image}alt="image" />
        
        
        </div>
        <h1 className="portfolio__h1"
          
     >{title}</h1>
        <div className="portfolio__btn">
          <a href={github} target="_blank" id="github__btn" >github</a>
          
          <a href={demo}target="_blank" id="livedemo__btn">live demo</a>
        
        </div>
        </div>
             
                
                
                
                
                )
            })
           }
     </div>
   
    
    
    )
  
  
  
  
}




