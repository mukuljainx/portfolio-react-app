import  React from 'react';
import Proptypes from 'prop-types';
import {Link} from 'react-router';

const Showcase = ({work}) => {
  return (
    <div className="column small-10 medium-9 card portfolio-work">
      <div className="work-showcase-img-container">
        <img className="work-showcase-img" src={require("../media/work/" + work.img)}
             alt={work.altImg} />
        <div className={"work-showcase-img-detail text-center " + work.detailTextColor}>
          <Link className="hollow button work-showcase-img-button" to={work.detailLink}>View
            Project</Link>
          <p className="roboto weight-medium">{work.what}</p>
          {/*<p className="roboto weight-medium"> + work.stack + "</p>"*/}
        </div>
      </div>
      <div className="work-title-div row">
        <div className="column small-12 medium-6">
          <p className="roboto">{work.name}</p>
          <p className="roboto weight-light">{work.stack}</p>
        </div>
        <div className="column small-12 medium-6 text-right">
          <p className="roboto">&nbsp;</p>
          <p className="roboto weight-light"><a href={work.githubLink} target="_blank">Github</a> |
            <a href={work.websiteLink} target="_blank">Website</a> |
            <Link className="detail-link-button" to={"/work/" + work.detailLink }>View Project</Link></p>
        </div>
      </div>
    </div>
  );
};

Showcase.propTypes = {
  work : Proptypes.object.isRequired
};


export default Showcase;
