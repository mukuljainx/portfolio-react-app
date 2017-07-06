import  React from 'react';


class Contact extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
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
          <div className="small-1 contact-seprator">
            {/*<!-- css handles these divs -->*/}
            <div />
            <div />
          </div>
        </div>

        <div className="row align-center">
          <div className="column small-10 medium-10 text-center social-contact">
            <div className="row">
              <div className="column small-12 large-2 medium-4 large-offset-1">
                <p>
                  <a href="https://github.com/jainmukul" target="_blank">
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
                <p><a href="https://plus.google.com/+MukulJainx" target="_blank"><img
                  src={require("../media/google.svg")}
                  alt="google icon"/>/+mukuljainx</a>
                </p>
              </div>
              <div className="column small-12 large-2 medium-4 end">
                <p><a href="https://www.behance.net/mukuljainx" target="_blank"><img
                  src={require("../media/behance.svg")}
                  alt="behance icon"/>/mukuljainx</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }
}


export default Contact;
