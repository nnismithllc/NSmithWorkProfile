import React, { Component } from "react";
import { BrowserRouter } from 'react-router-dom';
import { MDBNav, MDBNavLink, MDBContainer, MDBRow, MDBCol } from "mdbreact";


class Navbar extends Component {
    render (){
        return (
            <nav className="navbar">
 <BrowserRouter>

<MDBContainer>
  <MDBRow>
    <MDBCol size="6">
      <MDBNav color="peach-gradient" className="font-weight-bold py-4 px-2 mb-4">
        <MDBNavLink className="white-text" active to="#home" >Home<MDBIcon icon="home" /></MDBNavLink>
        <MDBNavLink className="white-text" to="#container-about">About Me<MDBIcon icon="female"/></MDBNavLink>
        <MDBNavLink className="white-text" to="#portfolio">My Portfolio<MDBIcon icon="laptop" /></MDBNavLink>
        <MDBNavLink className="white-text" to="#contact">Contact Me<MDBIcon far icon="envelope-open"/></MDBNavLink>
      </MDBNav>
      </MDBCol>
      </MDBRow>
</MDBContainer>

</BrowserRouter>

            </nav>
        )
    }
}
export  default Navbar
  