import React, { Component } from "react";
import { Link } from "react-router-dom";
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink
} from "reactstrap";

class Header extends Component {
  constructor(props) {
    super(props);

    this.toggle = this.toggle.bind(this);
    this.state = {
      isOpen: false
    };
  }

  toggle() {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  render() {
    return (
      <Navbar color="light" light expand="md">
        <NavbarBrand href="/">Awesome app!</NavbarBrand>
        <NavbarToggler onClick={this.toggle} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink tag={Link} to="/">
                Recipes
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink tag={Link} to="/ingredients">
                Ingredients
              </NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
      // <ul>
      //   <li>
      //     <Link to="/">Recipes</Link>
      //   </li>
      //   <li>
      //     <Link to="/ingredients">Ingredients</Link>
      //   </li>
      // </ul>
    );
  }
}

export default Header;
