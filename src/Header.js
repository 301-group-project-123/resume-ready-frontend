import React from 'react';
import { Navbar, NavItem } from 'react-bootstrap';
import { Link } from 'react-router-dom';

class Header extends React.Component {
  render() {
    return (
      <Navbar collapseOnSelect expand="lg" bg="" variant="dark">
        <Navbar.Brand>My Favorite Books</Navbar.Brand>
        <NavItem><Link to="/" className="nav-link">Home</Link></NavItem>
        <NavItem><Link to="/collection" className="nav-link">Collection</Link></NavItem>
        <NavItem><Link to="/about" className="nav-link">About</Link></NavItem>
        <NavItem><Link to="/profile" className="nav-link">Profile</Link></NavItem>

        {/* PLACEHOLDER: render a navigation link to the about page */}
      </Navbar>
    );
  }
}

export default Header;