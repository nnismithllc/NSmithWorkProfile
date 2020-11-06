import React, { Component } from "react";
import { BrowserRouter } from "react-router-dom";
import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol } from "mdbreact";

function Navbar() {
  return (
    <BrowserRouter>
      <nav className="navbar">
        <MDBContainer>
          <MDBRow>
            <MDBCol size="24">
              <MDBNav
                color="peach-gradient"
                className="font-weight-bold py-4 px-2 mb-4">
                <MDBNavLink
                  className="white-text"
                  MDBIcon
                  icon="home"
                  active
                  to="#home">
                  Home
                </MDBNavLink>
                <MDBNavLink
                  className="white-text"
                  MDBIcon
                  icon="female"
                  to="#container-about"
                >
                  About Me
                </MDBNavLink>
                <MDBNavLink
                  className="white-text"
                  MDBIcon
                  icon="laptop"
                  to="#portfolio"
                >
                  My Portfolio
                </MDBNavLink>
                <MDBNavLink
                  className="white-text"
                  MDBIcon
                  far
                  icon="envelope-open"
                  to="#contact"
                >
                  Contact Me
                </MDBNavLink>
              </MDBNav>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </nav>
    </BrowserRouter>
  );
}
export default Navbar;
