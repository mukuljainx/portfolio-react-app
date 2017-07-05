import  React from 'react';

import Showcase from './Showcase';

class Work extends React.Component {

  constructor(props) {
    super(props);
      this.state = {
        work : {}
      }

  }

  render() {
    return (
      <div className="row work-row">
        work
        <Showcase work={this.state.work}/>
      </div>
    );
  }
}


export default Work;
