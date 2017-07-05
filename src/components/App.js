import  React from 'react';
import Header from './common/Header';
import Footer from './common/Footer';
import Home from './Home';
import About from './About';
import Work from './Work';
import WorkDetail from './WorkDetail';

import {BrowserRouter, Route} from 'react-router-dom';

class App extends React.Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Header/>
          {/*{this.props.children}*/}

          <div>
            <Route exact path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/work" component={Work}/>
            <Route path="/work/:id" component={Work}/>
            <Route path="/work/details/:id" component={WorkDetail}/>
          </div>
          <Footer/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
