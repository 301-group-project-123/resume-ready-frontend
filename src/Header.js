import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import './header.css'

class Header extends React.Component {
  render() {
    return (
      <Navbar id="title" collapseOnSelect expand="lg">
        <Navbar.Brand style={{color:'white', fontSize:'1.5vw'}}>Movie Finder</Navbar.Brand>
        <NavItem id="one"><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem id="two"><Link to="/collection" className="nav-link">Collection</Link></NavItem>
        <NavItem id="three"><Link to="/about" className="nav-link">About</Link></NavItem>
        <NavItem id="four"><Link to="/profile" className="nav-link">Profile</Link></NavItem>

        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    );
  }
}

export default Header;