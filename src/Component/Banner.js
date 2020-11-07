import React, { Component } from "react";
import tia from '../Component/public/images/Tia.jpg';
import { BrowserRouter } from "react-router-dom";
import {MDBNavLink} from "mdbreact";


function Banner () {
return (
<BrowserRouter>
<section className="container-banner">
<MDBNavLink className="white-text" active to="#home"> <img id="propic" src= {tia} width="500" height="500" alt="ProfilePic"/>
</MDBNavLink>
</section>
</BrowserRouter>

)
}

export default Banner