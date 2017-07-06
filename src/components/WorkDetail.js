import  React from 'react';
import PropTypes from 'prop-types';

import '../styles/work-details.scss';

import workDetails from './data/workDetails';

const pathToId = {
  "plinth-2017": "plinth2017",
  "mun": "mun",
  "timespread":"timeSpread",
  "zento" : "zento",
  "flash": "flashChat" ,
  "plinth-2016": "plinth2016",
  "event-graphia": "egOld",
  "event-graphia-angular":"egNew"
};

class WorkDetail extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      work: workDetails.plinth2017
    };

    this.getFeaturesList = this.getFeaturesList.bind(this);
    this.getAboutList = this.getAboutList.bind(this);
  }

  componentWillMount() {
    const pathNameArray = this.props.location.pathname.split('/');
    this.setState({
      work: workDetails[pathToId[pathNameArray[pathNameArray.length - 1]]]
    });
    console.log(pathToId[pathNameArray[pathNameArray.length - 1]]);
  }

  getFeaturesList() {
    return this.state.work.features.map((feature, i) => {
      return <li key={i}>{feature}</li>;
    });
  }

  getAboutList() {
    return this.state.work.about.map((info, i) => {
      return <p className="roboto" key={i}>{info}</p>;
    });
  }


  render() {
    const features = this.getFeaturesList();
    const about = this.getAboutList();
    return (
      <section >
        <div className="row align-center">
          <div className="column small-12 text-center">
            <h3 className="raleway weight-medium work-detail-set-heading">{this.state.work.title}</h3>
            <p>{this.state.work.jobType}</p>
          </div>
          <div className="row align-center">
            <div className="column small-10 medium-5 text-center">
              <img src={require("../media/work-detail/" + this.state.work.mainImg)} alt={this.state.work.altMainImg}/>
            </div>
            <div className="column small-12 text-center">
              {this.state.work.website !== "" &&
              <a className="hollow button resume-button roboto fix-width" href={this.state.work.website}
                 target="_blank">Website</a>}
              {this.state.work.github !== "" &&
              <a className="hollow button resume-button roboto fix-width" href={this.state.work.github} target="_blank">Github</a>}
            </div>
          </div>
        </div>

        <div className="row align-center">
          <div className="column small-10">
            <h3 className="raleway about-set-heading">About</h3>
            {about}
          </div>
        </div>

        <div className="row align-center">
          <div className="column small-10">
            <h3 className="raleway about-set-heading">Technical Sheet</h3>
            {this.state.work.otherTech !== "" && <p>{this.state.work.otherTech}</p>}

            {this.state.work.frontEndTech !== "" && <p><b>Front-End:</b><br /> {this.state.work.frontEndTech} </p>}

            {this.state.work.backEndTech !== "" && <p><b>Back-End:</b><br /> {this.state.work.backEndTech} </p>}
          </div>
        </div>

        {this.state.work.features.length !== 0 &&
        <div className="row align-center">
          <div className="column small-10">
            <h3 className="raleway about-set-heading">Features</h3>
            <ul>
              {features}
            </ul>
          </div>
        </div>}
      </section>
    );
  }
}

WorkDetail.propTypes = {
  location: PropTypes.object,
};


export default WorkDetail;
