import React from "react"
import Header from "./Components/Header/Header.js"
import NavBar from "./Components/NavBar/NavBar.js"
import AboutMe from "./Components/AboutMe/AboutMe.js"
import Experience from "./Components/Experience/Experience.js"
import Contacts from "./Components/Contacts/Contacts.js"
import Portfolio from "./Components/Portfolio/Portfolio.js"

import Services from "./Components/Services/Services.js"
import Testimonials from "./Components/Testimonials/Testimonials.js"
import Footer from "./Components/Footer/Footer.js"




function App() {
  return (
    <>
        <Header/>
      
        <AboutMe/>
        <Experience/>
        <Services/>
        <Contacts/>
        <Portfolio/>
        <Testimonials/>
        <Footer/>
   
    
    
    </>
  
   
  );
}

export default App;
