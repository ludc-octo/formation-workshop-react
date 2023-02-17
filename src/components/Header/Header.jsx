import React from "react";
import './header.css';
import {Link} from "react-router-dom";

const Header = () => {
  return (<>
    <figcaption>Les bases du dev web</figcaption>
    <nav>
      <ul>
        <li><Link to="/">Accueil</Link></li>
        <li><Link to="/publier">Publier</Link></li>
        <li><Link to="/articles">Articles</Link></li>
        <li><Link to="/meteo">Météo</Link></li>
      </ul>
    </nav>
  </>);
};

export default Header;
