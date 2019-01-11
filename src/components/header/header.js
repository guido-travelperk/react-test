import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <ul>
        <li>
          <Link to="/">Recipes</Link>
        </li>
        <li>
          <Link to="/ingredients">Ingredients</Link>
        </li>
      </ul>
    );
  }
}

export default Header;
