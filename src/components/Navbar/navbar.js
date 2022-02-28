import React, { Component } from "react";
import { Link } from "react-router-dom";
import { style } from "typestyle";
import {
  NavbarSection,
  Logo,
  LogoText,
  UlList,
  ListItem,
  Anchor
} from "./style.js";
const niceColor = style({
  display: " block",
  color: "#222",
  textDecoration: "none",
  padding: "10px 15px",
  fontWeight: "bold",
  "&:hover": {
    color: "#eb5424"
  }
});

const Navbar = () => {
  return (
    <NavbarSection>
      <div class="container">
        <Logo>
          <LogoText>Ultra Profile</LogoText>
        </Logo>

        <UlList>
          <ListItem>
            <Link exact to="/" className={niceColor}>
              Home
            </Link>
          </ListItem>
          <ListItem>
            <Anchor href="#">Work</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Portfolio</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">Resume</Anchor>
          </ListItem>
          <ListItem>
            <Anchor href="#">About</Anchor>
          </ListItem>
          <ListItem>
            <Link to="/contact" className={niceColor}>
              Contact
            </Link>
          </ListItem>
        </UlList>
      </div>
    </NavbarSection>
  );
};

export default Navbar;
