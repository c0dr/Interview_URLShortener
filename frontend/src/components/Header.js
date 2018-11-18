import React from 'react';
import {
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  } from 'reactstrap';

  export default class Header extends React.Component {
    render() {
      return (
        <div>
          <Navbar color="dark" dark>
            <NavbarBrand href="/">URLShortener</NavbarBrand>
          </Navbar>
        </div>
      );
    }
  }
