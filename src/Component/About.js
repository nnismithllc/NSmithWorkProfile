import React, { Component } from "react";
import mainPic from './public/images/pro5.jpg';
import code1 from './public/images/code1.jpg'
import mern from './public/images/mern.png'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer} from "mdbreact";


function About() {

        return (
          <MDBContainer>
            <p id="info"> Beginning my coding career has been one of the most exhilarating experience of my work life. The challenge of building dynamic visuals from mock flow tables to user interactive structures is thrilling to me. My expertise lies in the framework of front-end web development, but also, my creativity is well-rounded with back-end javascript and node.js. My skill-set lies within the visual material and information that users require. All users require free flowing navigation and comprehensive dynamics that will allow them to move through the site gracefully, and get results quickly to be more productive. My objective is to narrow the visual esthetics of applications to a central point of cohesiveness that all users require. </p>
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1 view w-80">
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img className="d-block w-100"
                      src={mainPic}
                      alt="First slide hand pic"
                    />
                    <MDBMask overlay="black-light" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="2">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={code1}
                      alt="Second slide coding pic"
                    />
                    <MDBMask overlay="black-strong" />
                  </MDBView>
                </MDBCarouselItem>
                <MDBCarouselItem itemId="3">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={mern}
                      alt="Third slide MERN pic"
                    />
                    <MDBMask overlay="black-slight" />
                  </MDBView>
                </MDBCarouselItem>
              </MDBCarouselInner>
            </MDBCarousel>
          </MDBContainer>
        );
    }
    
    export default About;

