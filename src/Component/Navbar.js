// Imports for Navbar
import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MDBNav, MDBIcon} from "mdbreact";
import { NavHashLink } from "react-router-hash-link";


// Navbar Function Call
function Navbar() {
  return (
    <BrowserRouter>
      <MDBNav color="purple" className="font-weight-bold py-4 px-4 mb-6">
        <NavHashLink
          className="yellow-text"
        
          to="#home"> 
          <MDBIcon
          icon="home"></MDBIcon>
          Home
        </NavHashLink>

        <NavHashLink 
        className="blue-text"
        to="#About">
          <MDBIcon
          icon="female"></MDBIcon>
          About Me
        </NavHashLink>
       
        <NavHashLink
          className="green-text"
          
          to="#Portfolio">
          <MDBIcon
          icon="laptop"></MDBIcon>
          My Portfolio
        </NavHashLink>

        <NavHashLink
          className="orange-text"
        
          to="#Contact">
             <MDBIcon
          icon="envelope-open"></MDBIcon>
          Contact Me
        </NavHashLink>
        
      </MDBNav>
    </BrowserRouter>
  );
}

// Export Information for Navbar
export default Navbar;
