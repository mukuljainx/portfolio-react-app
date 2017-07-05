import  React from 'react';

import Skill from './Skill';


const SkillContainer = ({skills}) => {
  const getSkillSet = () => {
    return skills.map((category, i) => {
      let set = [];
      for (let i = 0; i < category.set.length; i++) {
        set.push(<Skill key={i} name={category.set[i].name} n={category.set[i].value}/>);
      }
      return (
        <div className="row align-center" key={i}>
          <div className="column small-10">
            <div className="row">
              <div className="column small-12">
                <h6>{category.categoryName}</h6>
                <div className="row">
                  {set}
                </div>
              </div>
            </div>
          </div>
        </div>
      );
    });

  };
  const skillSet = getSkillSet();
  return (
    <section>
      <div className="row align-center">
        <div className="column small-10">
          <h3 className="raleway about-set-heading">Skills</h3>
        </div>
      </div>
      <div className="skill-set">
        {skillSet}
      </div>
    </section>
  );
};


export default SkillContainer;



