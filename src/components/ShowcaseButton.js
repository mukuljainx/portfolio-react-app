import  React from 'react';
import Proptypes from 'prop-types';

const ShowcaseButton = ({direction,imagePath, onClickHandler}) => {
  return (
    <div className={"work-nav work-nav-" + direction} onClick={onClickHandler}>
      <img src={imagePath} alt={direction + " arrow for navigation"} />
    </div>
  );
};

ShowcaseButton.propTypes = {
  direction : Proptypes.string.isRequired,
  imagePath : Proptypes.string.isRequired,
  onClickHandler : Proptypes.func.isRequired
};


export default ShowcaseButton;
