import React, { Component } from 'react';
import { Navbar, Nav, NavItem ,NavDropdown, MenuItem} from 'react-bootstrap';

class Header extends Component {
  render() {
    return (
      <div className="Header">
       <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <a href="/">Sherwin Wyco</a>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="/"> 
        Home
      </NavItem>
      <NavItem eventKey={2} href="/projects">
        Projects
      </NavItem>
       <NavDropdown eventKey={3} title="Hobbies" id="basic-nav-dropdown">
        <MenuItem href="/csgo" eventKey={3.1}>CS:GO</MenuItem>
        <MenuItem href="/lol" eventKey={3.2}>League of Legends</MenuItem>
      </NavDropdown>

      <NavDropdown eventKey={3} title="Contacts" id="basic-nav-dropdown">
        <MenuItem href="https://github.com/cryptic20" target="_blank" eventKey={3.1}>GitHub</MenuItem>
        <MenuItem href="https://linkedin.com/in/sherwin-wyco" target="_blank" eventKey={3.2}>LinkedIn</MenuItem>
        <MenuItem href="mailto:sherwin.wyco20@gmail.com" eventKey={3.3}>Email me</MenuItem>
       {/*} <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>*/}
      </NavDropdown>
    </Nav>

    {/*}
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
	*/}

  </Navbar.Collapse>
</Navbar>
      </div>
    );
  }
}

export default Header;
