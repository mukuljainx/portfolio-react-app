import  React from 'react';

import SkillContainer from './SkillContainer';
import ExperienceContainer from './ExperienceContainer';
import AboutInfo from './AboutInfo';


import skills from './data/skills';
import experiences from './data/experiences';


class About extends React.Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <section>

        <AboutInfo />
        <SkillContainer skills={skills} />
        <ExperienceContainer experiences={experiences} />


        <div className="row align-center">
          <div className="column small-10 small-centered text-center">
            <a className="hollow button resume-button roboto" href="media/documents/mukul-jain-resume.pdf" download>Resume</a>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
