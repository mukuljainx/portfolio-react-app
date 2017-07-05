import  React from 'react';
import {Link, BrowserRouter} from 'react-router-dom';

const Header = () => {
  return (
    <div>
      <nav>
        <div className="navitem text-right">
          <ul>
            <li><Link className="navitem-" to="/">home</Link></li>
            <li><Link className="navitem-about" to="/about">about</Link></li>
            <li><Link className="navitem-work" to="/work">work</Link></li>
            <li><Link className="navitem-contact" to="/contact">contact</Link></li>
          </ul>
        </div>
      </nav>
      <img className="clouds-image" src={require("../../media/clouds.svg")} alt="clouds svg" />
    </div>
  );
};



export default Header;
