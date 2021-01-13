import React, { useState } from "react";
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
    <div>
      <Navbar color="faded" light>
        <NavbarBrand href="/" className="mr-auto">
          Cache and Cookies
        </NavbarBrand>
        <NavbarToggler onClick={toggleNavbar} className="mr-2" />
        <Collapse isOpen={!collapsed} navbar>
          <Nav navbar>
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
              <NavLink href="">Get a Quote</NavLink>
            </NavItem>
          </Nav>
        </Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
