import React, { useState } from "react";
// import Logo from "../../logo.svg";
import "./Navbar.module.css";

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
} from "reactstrap";

const Navigation = (props) => {
  const [collapsed, setCollapsed] = useState(true);

  const toggleNavbar = () => setCollapsed(!collapsed);

  return (
    <div className="fixed-top">
      <Navbar color="faded" light className="navbar-expand-md px-5">
        <NavbarBrand href="/" className="mr-auto">
          Cache and Cookies
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav className="ml-auto" navbar>
            <NavItem>
              <NavLink href="">About</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Purpose</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Clients</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Team</NavLink>
            </NavItem>
            <NavItem>
              <NavLink href="">Contact Us</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
