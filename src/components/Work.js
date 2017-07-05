import  React from 'react';

import Showcase from './Showcase';

class Work extends React.Component {

  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div className="row work-row">
        work
        <Showcase/>
      </div>
    );
  }
}


export default Work;
