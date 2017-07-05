import  React from 'react';

import HomeInfo from './HomeInfo';
import Modal from './Modal';


class Home extends React.Component {

  constructor(props) {
    super(props);

  }


  render() {
    return (
      <div>
        <HomeInfo/>
        <Modal openKnowMoreModal={this.openKnowMoreModal}/>
      </div>
    );
  }
}


export default Home;
