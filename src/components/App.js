import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Header from "./common/Header";
import Footer from "./common/Footer";
import Home from "./Home";
import About from "./About";
import Work from "./Work";
import WorkDetail from "./WorkDetail";
import Contact from "./Contact";
import NoMatch from "./NoMatch";

class App extends React.Component {
  render() {
    return (
      <Router>
        <React.Fragment>
          <Header />
          <Route path="/" exact component={Home} />
          <Route path="/about" component={About} />
          <Route path="/work" exact component={Work} />
          <Route path="/work/:id" exact component={Work} />
          <Route path="/work/:id/details" component={WorkDetail} />
          <Route path="/contact" component={Contact} />
          <Route path="/404" component={NoMatch} />
          <Footer />
        </React.Fragment>
      </Router>
    );
  }
}

export default App;
