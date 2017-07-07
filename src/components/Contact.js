import  React from 'react';
import AnimatedWrapper from "./AnimatedWrapper";

const ContactComponent = () => {
  return (
    <section>
      <h2 className="text-center raleway page-head">Get in Touch</h2>

      <div className="row">
        <div className="column small-12 text-center main-contact">
          <p><a href="mailto:jainmukul1996@gmail.com"><img src={require("../media/email.svg")} alt="email icon"/><span
            className="roboto">jainmukul1996@gmail.com</span></a></p>
          <p><a href="tel:++917221008771"><img src={require("../media/mobile.svg")} alt="mobile icon"/><span
            className="roboto">+91-7221-008-771</span></a></p>
        </div>
      </div>

      <div className="row align-center">
        <div className="small-1 small-centered contact-seprator" style={{"margin-bottom": "40px"}}>
          {/*<!-- css handles these divs -->*/}
          <div />
          <div />
        </div>
      </div>

      <div className="row align-center text-center" style={{"margin-bottom": "40px"}}>
        <div className="columns">
          Hire me through <a href="https://codementor.io/mukuljainx" target="_blank">Codementor</a>
        </div>
      </div>

      <div className="row align-center">
        <div className="small-1 small-centered contact-seprator">
          {/*<!-- css handles these divs -->*/}
          <div />
          <div />
        </div>
      </div>

      <div className="row align-center">
        <div className="column small-10 medium-10 small-centered text-center social-contact">
          <div className="row">
            <div className="column small-12 large-2 medium-4 large-offset-1">
              <p>
                <a href="https://github.com/mukuljainx" target="_blank">
                  <img src={require("../media/github.svg")} alt="github icon"/>/mukuljainx
                </a>
              </p>
            </div>
            <div className="column small-12 large-2 medium-4">
              <p><a href="https://www.linkedin.com/in/mukuljainx" target="_blank"><img
                src={require("../media/linkedin.svg")} alt="linkedin icon"/>/mukuljainx</a></p>
            </div>
            <div className="column small-12 large-2 medium-4 ">
              <p><a href="https://www.facebook.com/mukuljainx" target="_blank"><img
                src={require("../media/facebook.svg")} alt="facebook icon"/>/mukuljainx</a></p>
            </div>
            <div className="column small-12 large-2 medium-4">
              <p><a href="https://plus.google.com/+MukulJainx" target="_blank"><img src={require("../media/google.svg")}
                                                                                    alt="google icon"/>/+mukuljainx</a>
              </p>
            </div>
            <div className="column small-12 large-2 medium-4 end">
              <p><a href="https://www.behance.net/mukuljainx" target="_blank"><img src={require("../media/behance.svg")}
                                                                                   alt="behance icon"/>/mukuljainx</a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Contact = AnimatedWrapper(ContactComponent);
export default Contact;
