import React from 'react';


function navbar(props) {
    return (
        <div>
    <nav id="home">
      <div className="nav-child1"><span>P</span>ORTFOLIO </div>
      

      <div className="nav-child2">
        <ul id="sidemenu">
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Service</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
  
        
      </div>
    </nav>  
        </div>
    );
}

export default navbar;