// Imports from App.js Page to Run Banner Function
import React from "react";
import tia from "../Component/public/images/Tia.jpg";
import { BrowserRouter } from "react-router-dom";
import { MDBNavLink } from "mdbreact";

// Banner Page Function
function Banner() {
  return (
    <BrowserRouter>
      <section className="container-banner">
        <MDBNavLink className="white-text" active to="#home">
          {" "}
          <img
            id="propic"
            src={tia}
            width="500"
            height="500"
            alt="ProfilePic"
          />
        </MDBNavLink>
      </section>
    </BrowserRouter>
  );
}

// Export Function for Banner
export default Banner;
