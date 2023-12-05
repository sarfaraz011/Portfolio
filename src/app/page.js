import React from 'react';
import Navbar from '../app/components/navbar'
import Home from '../app/components/home'
import About from '../app/components/about'
import Service from '../app/components/service'
import Portfolio from '../app/components/portfolio'
import Contact from '../app/components/contact'
function page(props) {
  return (
    <>
     <Navbar/>
     <Home/>
     <About/>
     <Service/>
     <Portfolio/> 
     <Contact/>
     </>
   
    
   
  );
}

export default page;