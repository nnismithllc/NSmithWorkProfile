import React,{Component} from "react";
import {MDBRow, MDBCol, MDBCardBody, MDBIcon, MDBBtn, MDBView, MDBMask } from "mdbreact";
import BurgerPic from '../Component/public/images/Burger.JPG';
import LandPic from '../Component/public/images/LandDegrees.JPG';
import NotePic from '../Component/public/images/NoteTaker.JPG';
import SnapPic from '../Component/public/images/snapbudget.JPG';


class Portfolio extends Component {
    render(){
  return (
    <section className="text-center my-5">
        <h2 className="h1-responsive font-weight-bold my-5">
        Check out some of my creative framework applications.
        </h2>
        <p className="grey-text w-responsive mx-auto mb-5">
          This application allows you to search the weather in your area by city and state.
        </p>

        <MDBRow className="d-flex justify-content-center">
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img src={LandPic} alt="LandDegree" className="img-fluid"/>
              <a href="https://nnismithllc.github.io/LandDegrees/">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="https://github.com/nnismithllc/LandDegrees" className="green-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                <MDBIcon icon="umbrella-beach" className="pr-2" />
                LandDegrees
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Explore Your City's Weather</h4>
              <p>
                Simple application with astounding visual aspects to capture the essence of color in one of the earth's beautiful landmarks.
              </p>
              <MDBBtn color="success" rounded>
                GitHub Link
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src= {BurgerPic} alt="Burger" className="img-fluid"/>
              <a href="https://burgermebabydelight.herokuapp.com/">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="https://github.com/nnismithllc/EatDaBurger" className="blue-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                <MDBIcon icon="hamburger" className="pr-2" />
                  EatDaBurger
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Let's Order a Burger</h4>
              <p>
                This application allows you to name a unique burger for you to move from a "order" status to a "devour" state with button functionality. 
                The application allows users to use the "CRUD" method to interact with the data platform.
              </p>
              <MDBBtn color="success" rounded>
                GitHub Link
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img src={NotePic} alt="Note Taker" className="img-fluid" />
              <a href="https://notetak3r.herokuapp.com/">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="https://github.com/nnismithllc/NoteTak3r" className="brown-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="sticky-note" className="pr-2" />
                  Note Taker
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Note Tak3r</h4>
              <p>
                This application allows you to transition from home page to note page by button functionality. The note page allows users to enter notes and save on their local drive for later use. App uses the "CRUD" method to engage users to create, read, update, and delete entries in order of submission. 
              </p>
              <MDBBtn color="success" rounded>
               GitHub Link
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
          <MDBCol md="6" xl="5" className="mb-4">
            <MDBView className="overlay rounded z-depth-2" waves>
              <img
                src={SnapPic} alt="SnapBudget" className="img-fluid" />
              <a href="https://mysnapbudget.herokuapp.com/">
                <MDBMask overlay="white-slight" />
              </a>
            </MDBView>
            <MDBCardBody className="pb-0">
              <a href="https://github.com/WD40JS/project_2" className="cyan-text">
                <h5 className="font-weight-bold mt-2 mb-3">
                  <MDBIcon icon="camera-retro" className="pr-2" />
                  Snap Budget
                </h5>
              </a>
              <h4 className="font-weight-bold mb-3">Snap Budget</h4>
              <p>
                This application is a mysql data database for users who want to track their income. The application use a login system that allows privacy of entry data for amount gain, loss, and keeps record of entries. The application also displays a graph to show the marketing trend for each customer spending or gain entry.
              </p>
              <MDBBtn color="success" rounded>
                GitHub Link
              </MDBBtn>
            </MDBCardBody>
          </MDBCol>
        </MDBRow>
      </section>
  );
}
}

export default Portfolio;


















