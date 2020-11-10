// Imports from App.js Page to Run Contact Function
import React from "react";
import emailjs from "emailjs-com";
import{ init } from 'emailjs-com';
import "./Contact.js";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardBody,
  MDBIcon,
  MDBBtn,
  MDBInput,
} from "mdbreact";

// Export for Contact Function
export default function Contact() {
  // Send Function
  function sendEmail(e) {
    console.log ('Im an Email')
    e.preventDefault();

    emailjs
      .sendForm(
        "gmail",
        "template_8xf3fh5",
        e.target,
        "user_C7KCkTN3yY1VzbTJMeAJg"
        
      )
      .then(
        (result) => {
          console.log(result.text);
        },
        (error) => {
          console.log(error.text);
        }
      );
    e.target.reset();
  }
  // Return Contact Information
  return (
    <div>
      <div className="container">
        <form onSubmit={sendEmail} id="form">
          <section className="contact-section my-5">
            <MDBCard>
              <MDBRow>
                <MDBCol lg="8">
                  <MDBCardBody className="form">
                    <h3 className="mt-4">
                      <MDBIcon icon="envelope" className="pr-2" />
                      Send Me an Email:
                    </h3>
                    <MDBRow>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="text"
                            id="form-contact-name"
                            label="Your name"
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="text"
                            id="form-contact-email"
                            label="Your email"
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="text"
                            id="form-contact-phone"
                            label="Your phone"
                          />
                        </div>
                      </MDBCol>
                      <MDBCol md="6">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="text"
                            id="form-contact-company"
                            label="Your company"
                          />
                        </div>
                      </MDBCol>
                    </MDBRow>
                    <MDBRow>
                      <MDBCol md="12">
                        <div className="md-form mb-0">
                          <MDBInput
                            type="textarea"
                            id="form-contact-message"
                            label="Your message"
                          />
                          <MDBBtn
                           type='submit'
                            rounded
                            color="blue">
                            <MDBIcon icon="paper-plane" />
                          </MDBBtn>
                        
                        </div>

                      </MDBCol>
                    </MDBRow>
                  </MDBCardBody>
                </MDBCol>
                <MDBCol lg="4">
                  <MDBCardBody className="contact text-center h-100 black-text">
                    <h3 className="my-4 pb-2">Contact information</h3>
                    <ul className="text-lg-left list-unstyled ml-4">
                      <li>
                        <p>
                          <MDBIcon icon="map-marker-alt" className="pr-2" />
                          MI, 48184 USA
                        </p>
                      </li>
                      <li>
                        <p>
                          <MDBIcon icon="phone" className="pr-2" /> 313-457-3323
                        </p>
                      </li>
                      <li>
                        <p>
                          <MDBIcon icon="envelope" className="pr-2" />
                          nnismithllc@gmail.com
                        </p>
                      </li>
                    </ul>
                    <hr className="hr-light my-4" />
                    <ul className="list-inline text-center list-unstyled">
                      <li className="list-inline-item">
                        <a href="https://www.linkedin.com/in/nintia-smith/" className="p-2 fa-lg w-ic">
                          <MDBIcon fab icon="linkedin-in" />
                        </a>
                      </li>
                      <li className="list-inline-item">
                        <a href="https://github.com/nnismithllc" className="p-2 fa-lg w-ic">
                          <MDBIcon fab icon="github-square" />
                        </a>
                      </li>
                    </ul>
                  </MDBCardBody>
                </MDBCol>
              </MDBRow>
            </MDBCard>
          </section>
        </form>
      </div>
    </div>
  );
}

init("user_C7KCkTN3yY1VzbTJMeAJg")