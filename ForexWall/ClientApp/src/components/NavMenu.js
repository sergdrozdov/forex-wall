import React, { Component } from 'react';
import { Container, Navbar, NavbarBrand } from 'reactstrap';
import { Link } from 'react-router-dom';
import './NavMenu.css';

export class NavMenu extends Component {
  static displayName = NavMenu.name;

  constructor (props) {
    super(props);
  }

  render () {
    return (
      <header>
        <Navbar className="navbar-expand-sm navbar-toggleable-sm ng-white border-bottom box-shadow mb-3" light>
          <Container>
            <NavbarBrand tag={Link} to="/"><h1 className="display-4">Forex Live Wall</h1></NavbarBrand>
            <p className="lead">This is a simple test project by <a href="http://sd.blackball.lv/sergey-drozdov">Sergey Drozdov</a>.</p>
          </Container>
        </Navbar>
      </header>
    );
  }
}
