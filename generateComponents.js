const fs = require("fs");
const path = require("path");

const categories = [
  "Introduction to React",
  "Setting Up the Development Environment",
  "JSX - JavaScript XML",
  "Components",
  "Handling Events",
  "State Management",
  "Props vs. State",
  "Rendering Lists",
  "Conditional Rendering",
  "Forms and User Input",
  "Basic Hooks",
  "Styling and CSS",
  "Basic Routing",
  "Communicating with a Server",
  "Advanced Hooks",
  "Advanced Component Patterns",
  "State Management Libraries",
  "Performance Optimization",
  "Routing and Navigation",
  "Testing",
  "Build and Deployment",
  "Next.js",
  "Additional Tools and Libraries",
  "React Patterns and Best Practices"
];
const componentTemplate = (categoryName) => {
  const camelCaseCategoryName = categoryName.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase());

  return `
import React from "react";
import Accordion from "react-bootstrap/Accordion";
import "bootstrap/dist/css/bootstrap.min.css";
import styles from "./Terms.module.css";
import { gql, useQuery } from "@apollo/client";

const GET_CATEGORY_BY_NAME = gql\`
  query GetCategoryByName($name: String!) {
    getCategoryByName(name: $name) {
      name
      description
      concepts {
        term
        description
        code
      }
    }
  }
\`;

function ${camelCaseCategoryName}() {
  const { loading, error, data } = useQuery(GET_CATEGORY_BY_NAME, {
    variables: { name: "${categoryName}" }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error :(</p>;

const categoryData = data.getCategoryByName;

  return (
    <div>
     
      <h2>{categoryData.name}</h2>
      <p>{categoryData.description}</p>

      <Accordion defaultActiveKey="0" className="mb-3">
        {categoryData.concepts.map((concept, index) => (
          <Accordion.Item eventKey={String(index)} key={index}>
            <Accordion.Header>{concept.term}</Accordion.Header>
            <Accordion.Body>
              <p>{concept.description}</p>
              {concept.code && (
                <pre className={styles.codeSnippet}>
                  <code>{concept.code}</code>
                </pre>
              )}
            </Accordion.Body>
          </Accordion.Item>
        ))}
      </Accordion>
    </div>
  );
}

export default ${camelCaseCategoryName};
`;
};

categories.forEach((category) => {
  const fileName = `${category.replace(/\s+/g, "")}.js`;
  const filePath = path.join(__dirname, "client/src/components/concepts", fileName);

  fs.writeFile(filePath, componentTemplate(category), (err) => {
    if (err) throw err;
    console.log(`${fileName} has been created successfully`);
  });
});

// New section to generate Routes.js
const generateImportStatement = (category) => {
  const componentName = category.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '');
  const fileName = category.replace(/\s+/g, "");
  return `import ${componentName} from "./components/concepts/${fileName}";`;
};

const generateRoute = (category) => {
  const pathName = category.toLowerCase().replace(/[^a-z0-9]+/g, '-');
  const componentName = category.replace(/[^a-zA-Z0-9]+(.)/g, (m, chr) => chr.toUpperCase()).replace(/[^a-zA-Z0-9]/g, '');
  return `<Route path="/${pathName}" element={<${componentName} />} />`;
};

let imports = categories.map(generateImportStatement).join("\n");
let routes = categories.map(generateRoute).join("\n        ");

const routesFileContent = `
import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Concepts from "./components/concepts/Concepts";
import SearchResults from "./components/SearchResults"
${imports}

function Links() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/concept" element={<Concepts />} />
        <Route path="/search-results" element={<SearchResults />} />
        ${routes}
      </Routes>
    </>
  );
}

export default Links;
`;

// Specify the correct path for your Routes.js file
const routesFilePath = path.join(__dirname, "client/src", "Routes.js");

fs.writeFile(routesFilePath, routesFileContent, (err) => {
  if (err) throw err;
  console.log("Routes.js has been created successfully");
});

const generateNavLinks = (categories) => {
  // Generate direct NavLinks for the first 6 categories
  const directLinks = categories.slice(0, 7).map(category => 
    `            <NavLink to="/${category.toLowerCase().replace(/ +/g, '-')}" className={({ isActive }) => isActive ? \`${'${styles.activeLink}'} nav-link\` : "nav-link"}>${category}</NavLink>`
  ).join("\n");

  // Generate dropdown items for the rest
  const dropdownItems = categories.slice(6).map(category => 
    `             <NavDropdown.Item as={Link} to="/${category.toLowerCase().replace(/ +/g, '-')}" className="dropdown-item">
    ${category}
  </NavDropdown.Item>`
  ).join("\n");

  return { directLinks, dropdownItems };
};

const { directLinks, dropdownItems } = generateNavLinks(categories);

const headerComponentTemplate = `
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
    navigate(\`/search-results?query=\${encodeURIComponent(searchQuery)}\`);
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
            ${directLinks}
            <NavDropdown title="More" id="navbarScrollingDropdown">
              ${dropdownItems}
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
`;

// Specify the correct path for your Header.js file
const filePath = path.join(__dirname, "client/src/components", "Header.js");

fs.writeFile(filePath, headerComponentTemplate, (err) => {
  if (err) throw err;
  console.log("Header.js has been created successfully");
});
