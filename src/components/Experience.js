import  React from 'react';
import PropTypes from 'prop-types';


const Experience = ({experience}) => {
  return (
    <div className="experiance">
      <div className="row">
        <div className="column small-10 small-offset-1 medium-5 medium-offset-1 text-left">
          <h6>{experience.position}</h6>
          <p>{experience.company}</p>
        </div>
        <div className="column small-10 small-offset-1 medium-5 medium-offset-0 end">
          <p className="show-for-medium text-right">{experience.startDate}</p>
          <p className="show-for-small-only">{experience.endDate}</p>
        </div>
      </div>
      <div className="row align-center">
        <div className="column small-10 medium-10">
          <p className="text-justify">{experience.description}</p>
        </div>
      </div>
    </div>
  );
};

Experience.propTypes = {
  experience: PropTypes.object.isRequired
};

export default Experience;
