import  React from 'react';
import PropTypes from 'prop-types';

const Skill = ({name, n}) => {
  const createSpan = (spanClass, m) => {
    let row = [];
    for (let i = 0; i < m; i++) {
      row.push(<span key={i} className={spanClass}/>);
    }
    return row;
  };
  const disc = createSpan('dark-circle', n);
  const hollow = createSpan('hollow-circle', (10 - n));
  return (
    <div className="column small-12 medium-6 large-4 end">
      <span className="skill-name roboto"> {name}</span>
      <div className="skill-point-set">
        {disc}
        {hollow}
      </div>
    </div>
  );
};


Skill.propTypes = {
  name : PropTypes.string.isRequired,
  n : PropTypes.number.isRequired,
};


export default Skill;
