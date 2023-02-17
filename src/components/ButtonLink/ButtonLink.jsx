import React from "react";
import './button-link.css'
import {Link} from "react-router-dom";
import "./button-link.css";

const ButtonLink = ({ to, children }) => {
  return (
    <Link className="button-link" to={to}>
      { children }
    </Link>
  );
};

export default ButtonLink;
