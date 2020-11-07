import React from "react";
import { BrowserRouter } from "react-router-dom";
import { MDBNav} from "mdbreact";
import { NavHashLink } from 'react-router-hash-link';

function Navbar() {
  return (

    <BrowserRouter>
              <MDBNav
                color="purple"
                className="font-weight-bold py-4 px-2 mb-4">
                <NavHashLink
                  className="yellow-text"
                  MDBIcon
                  icon="home"
                  active
                  to ="#home">
                   Home
                </NavHashLink>
                <NavHashLink
                  className="blue-text"
                  MDBIcon
                  icon="female"
                  to="#About">
                  About Me
                </NavHashLink>
                <NavHashLink
                 className="green-text"
                  MDBIcon
                  icon="laptop"
                  to="#Portfolio">
                  My Portfolio
                </NavHashLink>
                <NavHashLink
                  className="orange-text"
                  MDBIcon
                  far
                  icon="envelope-open"
                  to="#Contact">
                  Contact Me
                </NavHashLink>
              </MDBNav>
    </BrowserRouter>
  );
}
export default Navbar;
