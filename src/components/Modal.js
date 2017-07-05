import  React from 'react';
import {Link,BrowserRouter} from 'react-router-dom';

import '../styles/modal.scss';


class Modal extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      modalKnowMoreWrapperClass: "",
      customModalClass: "",
      customModalWrapperClass: "display-none",
      columnCardClass: "display-none",
    };

    this.openKnowMoreModal = this.openKnowMoreModal.bind(this);
    this.closeKnowMoreModal = this.closeKnowMoreModal.bind(this);
  }

  componentDidMount(){
    this.modalKnowMoreWrapper = this.refs.modalKnowMoreWrapper;
    this.customModal = this.refs.customModal;
    this.customModalWrapper = this.refs.customModalWrapper;
    this.columnCard = this.refs.columnCard;
  }

  openKnowMoreModal() {
    this.setState({
      modalKnowMoreWrapperClass: "modal-know-more-wrapper-height",
      customModalClass: "custom-modal-final",
      customModalWrapperClass: "display-block",
      columnCardClass: "display-block",
    });
    // footerHandler();
  }

  closeKnowMoreModal() {
    this.setState({
      modalKnowMoreWrapperClass: "",
      customModalClass: "",
      customModalWrapperClass: "display-none",
      columnCardClass: "display-none",
    });
//   footerHandler();
  }

  render() {
    return (
      <div className="row">
        <div className="column small-12 text-center">
          <div className={"modal-know-more-wrapper " + this.state.modalKnowMoreWrapperClass} ref="modalKnowMoreWrapper">
            <a className="know-more raleway" onClick={this.openKnowMoreModal}>Know More</a>
            <div className={"custom-modal-wrapper " + this.state.customModalWrapperClass} onClick={this.closeKnowMoreModal} ref="customModalWrapper"/>
            <div className={"custom-modal custom-modal-none row align-center align-middle " + this.state.customModalClass} ref="customModal">
              <div
                className={"column small-10 medium-10 large-10 small-centered column-card " + this.state.columnCardClass}
                ref="columnCard">
                <i className="custom-modal-close-button" onClick={this.closeKnowMoreModal}>x</i>
                <div className="row align-center">
                  <div className="small-10 medium-3 column">
                    <Link to="/about">
                      <div className="card know-more-modal know-more-modal-card align-middle">
                        <img src={require("../media/about.svg")} alt="Mukul Jain | About Icon"/>
                        <p className="raleway">About</p>
                      </div>
                    </Link>
                  </div>
                  <div className="small-10 medium-3 column">
                    <Link to="/work">
                      <div className="card know-more-modal know-more-modal-card align-middle">
                        <img src={require("../media/work.svg")} alt="Mukul Jain | Work Icon"/>
                        <p className="raleway">Work</p>
                      </div>
                    </Link>
                  </div>
                  <div className="small-10 medium-3 column end">
                    <Link to="/contact">
                      <div className="card know-more-modal know-more-modal-card align-middle">
                        <img src={require("../media/contact.svg")} alt="Mukul Jain | Contact Icon"/>
                        <p className="raleway">Contact</p>
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}


export default Modal;
