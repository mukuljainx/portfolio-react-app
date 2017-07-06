import  React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Home';
import About from './About';
import Work from './Work';
import WorkDetail from './WorkDetail';
import { CSSTransitionGroup } from 'react-transition-group';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <CSSTransitionGroup
            transitionName="carousel"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}
          >
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route exact path="/work" component={Work} />
            <Route exact path="/work/:id" component={Work}/>
            <Route path="/work/details/:id" component={WorkDetail}/>
          </CSSTransitionGroup>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
