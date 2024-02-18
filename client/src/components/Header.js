
import React, { useState } from 'react';
import { NavLink, Link, useNavigate } from 'react-router-dom';
import { Navbar, Nav, NavDropdown, Container, Form, Button } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSearch } from '@fortawesome/free-solid-svg-icons';
import styles from './Header.module.css';

function Header() {
  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    navigate(`/search-results?query=${encodeURIComponent(searchQuery)}`);
    setSearchQuery('');
  };

  return (
    <Navbar expand="lg" sticky="top" className={styles.header + ' bg-body-tertiary'}>
      <Container>
        <Navbar.Brand href="/">React Concepts</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavLink to="/" className={({ isActive }) => isActive ? styles.activeLink + ' nav-link' : 'nav-link'}>Home</NavLink>
                        <NavLink to="/introduction-to-react" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>Introduction</NavLink>
            <NavLink to="/setting-up-the-development-environment" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>Set Up</NavLink>
            <NavLink to="/jsx-javascript-xml" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>JSX</NavLink>
            <NavLink to="/components" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>Components</NavLink>
            <NavLink to="/handling-events" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>Managing Events</NavLink>
            <NavLink to="/state-management" className={({ isActive }) => isActive ? `${styles.activeLink} nav-link` : "nav-link"}>State Management</NavLink>
            <NavDropdown title="More" id="navbarScrollingDropdown">
                           <NavDropdown.Item as={Link} to="/props-vs-state" className="dropdown-item">
    Props vs. State
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/rendering-lists" className="dropdown-item">
    Rendering Lists
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/conditional-rendering" className="dropdown-item">
    Conditional Rendering
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/forms-and-user-input" className="dropdown-item">
    Forms and User Input
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/basic-hooks" className="dropdown-item">
    Basic Hooks
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/styling-and-css" className="dropdown-item">
    Styling and CSS
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/basic-routing" className="dropdown-item">
    Basic Routing
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/communicating-with-a-server" className="dropdown-item">
    Communicating with a Server
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/advanced-hooks" className="dropdown-item">
    Advanced Hooks
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/advanced-component-patterns" className="dropdown-item">
    Advanced Component Patterns
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/state-management-libraries" className="dropdown-item">
    State Management Libraries
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/performance-optimization" className="dropdown-item">
    Performance Optimization
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/routing-and-navigation" className="dropdown-item">
    Routing and Navigation
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/testing" className="dropdown-item">
    Testing
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/build-and-deployment" className="dropdown-item">
    Build and Deployment
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/next-js" className="dropdown-item">
    Next.js
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/additional-tools-and-libraries" className="dropdown-item">
    Additional Tools and Libraries
  </NavDropdown.Item>
             <NavDropdown.Item as={Link} to="/react-patterns-and-best-practices" className="dropdown-item">
    React Patterns and Best Practices
  </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form className="d-flex" onSubmit={handleSearchSubmit}>
            <Form.Control
              type="search"
              placeholder="Search"
              className="me-2"
              aria-label="Search"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <Button variant="outline-success" type="submit">
              <FontAwesomeIcon icon={faSearch} />
            </Button>
          </Form>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
