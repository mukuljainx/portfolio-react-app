import  React from 'react';
import Proptypes from 'prop-types';
import Header from './common/Header';
import Footer from './common/Footer';

class App extends React.Component {
  render() {
    return (
      <div>
        <Header/>
        {this.props.children}
        <Footer/>
      </div>
    );
  }
}

App.propTypes ={
  children : Proptypes.node,
};

export default App;
