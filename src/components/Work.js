import  React from 'react';

import Showcase from './Showcase';
import ShowcaseButton from './ShowcaseButton';

import workList from './data/workList';

class Work extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      work: {},
      index: 0,
    };
    this.showNextWork = this.showNextWork.bind(this);
    this.showPreviousWork = this.showPreviousWork.bind(this);
  }

  componentWillMount() {
    console.log(workList.length);
    this.setState((prevState) => {
      return {
        work: workList[prevState.index]
      };
    });
  }

  showNextWork() {
    this.setState((prevState) => {
      const index = (prevState.index + 1) % workList.length;
      return {
        work: workList[index],
        index
      };
    });
  }

  showPreviousWork() {
    this.setState((prevState) => {
      const length = workList.length;
      const index = (((prevState.index - 1) % length) + length) % length; // because JS modules can return negative too!
      return {
        work: workList[index],
        index
      };
    });
  }

  render() {
    return (
      <div className="row work-row align-center">

        <ShowcaseButton direction="left" imagePath={require("../media/left.svg")}
                        onClickHandler={this.showPreviousWork}/>
        <Showcase work={this.state.work}/>
        <ShowcaseButton direction="right" imagePath={require("../media/left.svg")} onClickHandler={this.showNextWork}/>

      </div>
    );
  }
}


export default Work;
