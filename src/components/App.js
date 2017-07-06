import  React from 'react';
import TransitionGroup from "react-transition-group/TransitionGroup";
import {BrowserRouter, Route} from "react-router-dom";

import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Home';
import About from './About';
import Work from './Work';
import WorkDetail from './WorkDetail';
import Contact from './Contact';


const firstChild = props => {
  const childrenArray = React.Children.toArray(props.children);
  return childrenArray[0] || null;
};

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          <Route
            exact
            path="/"
            children={({match, ...rest}) => (
              <TransitionGroup component={firstChild}>
                {match && <Home {...rest} />}
              </TransitionGroup>
            )}/>
          <Route
            exact
            path="/about"
            children={({match, ...rest}) => (
              <TransitionGroup component={firstChild}>
                {match && <About {...rest} />}
              </TransitionGroup>
            )}/>
          {/*<Route*/}
            {/*exact*/}
            {/*path="/work"*/}
            {/*children={({match, ...rest}) => (*/}
              {/*<TransitionGroup component={firstChild}>*/}
                {/*{match && <Work {...rest} />}*/}
              {/*</TransitionGroup>*/}
            {/*)}/>*/}
          {/*<Route*/}
            {/*exact*/}
            {/*path="/work/:id"*/}
            {/*children={({match, ...rest}) => (*/}
              {/*<TransitionGroup component={firstChild}>*/}
                {/*{match && <Work {...rest} />}*/}
              {/*</TransitionGroup>*/}
            {/*)}/>*/}
          <Route
            exact
            path="/work/details/:id"
            children={({match, ...rest}) => (
              <TransitionGroup component={firstChild}>
                {match && <WorkDetail {...rest} />}
              </TransitionGroup>
            )}/>
          <Route
            exact
            path="/contact"
            children={({match, ...rest}) => (
              <TransitionGroup component={firstChild}>
                {match && <Contact {...rest} />}
              </TransitionGroup>
            )} />

          <Route exact path="/work" component={Work} />
          <Route exact path="/work/:id" component={Work}/>


          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
