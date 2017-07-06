import  React from 'react';

import HomeInfo from './HomeInfo';
import Modal from './Modal';
import AnimatedWrapper from "./AnimatedWrapper";

class HomeComponent extends React.Component {

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

const Home = AnimatedWrapper(HomeComponent);
export default Home;
