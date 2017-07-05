import  React from 'react';
import PropTypes from 'prop-types';

import Experience from './Experience';


const ExperienceContainer = ({experiences}) => {
  const getExperienceSet = () => {
    return experiences.map((experience, i) => {
      return <Experience key={i} experience={experience}/>;
    });
  };

  const experienceSet = getExperienceSet();

  return (
    <section>
      <div className="row align-center">
        <div className="column small-10 ">
          <h3 className="raleway about-set-heading">Experience</h3>
        </div>
      </div>

      <div className="experiance-set">
        {experienceSet}
      </div>
    </section>
  );
};

ExperienceContainer.propTypes = {
  experiences: PropTypes.array.isRequired
};

export default ExperienceContainer;



