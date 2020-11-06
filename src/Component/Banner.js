import React, { Component } from "react";
import mainPic from '../Component/public/images/pro5.jpg';
import { BrowserRouter } from "react-router-dom";
import {MDBNavLink} from "mdbreact";


function Banner () {
return (
<BrowserRouter>
<section className="container-banner">
<MDBNavLink className="white-text" active to="#home"> <img id="propic" src= {mainPic} width="1000" height="600" alt="ProfilePic"/>
<p id="info"> Beginning my coding career has been the most exhilarating experience in my work life. The challenge of building dynamic visuals from mock flow tables to user interactive structures is thrilling to me. My expertise lies in the framework of front-end development, but also, my creativity is well-rounded with back-end javascript and node.js. My skill-set lies within the visual material and information that users require. All Users require free flowing navigation and comprehensive dynamics that will allow them to move through the site simply, and get results quickly so can be more productive. My objective is to narrow the visual esthetics of my applications to a central point of this kind of cohesiveness that all users require. </p>
</MDBNavLink>
</section>
</BrowserRouter>

)

}

export default Banner