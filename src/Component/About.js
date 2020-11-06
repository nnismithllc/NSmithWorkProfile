import React, { Component } from "react";
import tia from './public/images/Tia.jpg';
import code1 from './public/images/code1.jpg'
import mern from './public/images/mern.png'
import { MDBCarousel, MDBCarouselInner, MDBCarouselItem, MDBView, MDBMask, MDBContainer} from "mdbreact";


function About() {

        return (
          <MDBContainer>
            <MDBCarousel
              activeItem={1}
              length={3}
              showControls={true}
              showIndicators={true}
              className="z-depth-1"
            >
              <MDBCarouselInner>
                <MDBCarouselItem itemId="1">
                  <MDBView>
                    <img
                      className="d-block w-100"
                      src={tia}
                      alt="First slide tia pic"
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

