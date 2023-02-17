import React from "react";
import './header.css';
import {Link, useLocation} from "react-router-dom";

const generateNavLink = (currentRoute, linkPath, linkLabel) => {
  console.log(currentRoute, linkPath)
  return currentRoute === linkPath ? (
    <>{ linkLabel }</>
  ) : (
    <Link to={linkPath}>{ linkLabel }</Link>
  )
}

const Header = () => {
  const router = useLocation();

  return (<>
    <figcaption>Les bases du dev web</figcaption>
    <nav>
      <ul>
        <li>{ generateNavLink(router.pathname, "/", 'Accueil') }</li>
        <li>{ generateNavLink(router.pathname, "/publier", 'Publier') }</li>
        <li>{ generateNavLink(router.pathname, "/articles", 'Articles') }</li>
        <li>{ generateNavLink(router.pathname, "/meteo", 'Météo') }</li>
      </ul>
    </nav>
  </>);
};

export default Header;
