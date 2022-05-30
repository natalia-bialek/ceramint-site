import "./NavigationBar.css";
import { useState } from "react";
import { Navbar, NavDropdown, Nav } from "react-bootstrap";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../images/logo.png";
import { Link } from "react-router-dom";

const links = [
  {
    name: "Aktualności",
    path: "/",
  },
  {
    name: "Warsztaty",
    path: "/warsztaty",
  },
  {
    name: "Projekty",
    path: "/projekty",
  },
  {
    name: "Informacje",
    path: "/informacje",
    subpages: [
      {
        name: "Pytania i odpowiedzi",
        path: "/faq",
      },
      {
        name: "Współpraca",
        path: "/wspolpraca",
      },
      {
        name: "Polityka prywatności",
        path: "/polityka-prywatnosci",
      },
    ],
  },
  {
    name: "Sklep",
    path: "/sklep",
  },
  {
    name: "Kontakt",
    path: "/kontakt",
  },
];

function NavBarItem({ item }) {
  const [show, setShow] = useState(false);
  const showDropdown = (e) => {
    setShow(!show);
  };

  // if link has subpages (is dropdown link)
  if (item.subpages?.length) {
    return (
      <NavDropdown
        title={item.name}
        show={show}
        onClick={showDropdown}
        id="nav-dropdown"
        className="navbar__link"
      >
        {item.subpages.map((subpage) => (
          <LinkContainer to={item.path + subpage.path}>
            <NavDropdown.Item eventKey={item.subpages.indexOf(subpage)} key={subpage.path}>
              {subpage.name}
            </NavDropdown.Item>
          </LinkContainer>
        ))}
      </NavDropdown>
    );
  }

  //default link
  return (
    <LinkContainer to={item.path}>
      <Nav.Link key={item.path} className="navbar__link">
        {item.name}
      </Nav.Link>
    </LinkContainer>
  );
}

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="md">
      <Navbar.Brand as={Link} to="/" className="logo">
        <img
          src={logo}
          alt="Logo"
        />
      </Navbar.Brand>

      <Navbar.Toggle aira-controls="responsive-navbar-nav" />
      <Navbar.Collapse
        id="responsive-navbar-nav"
        className="justify-content-center"
      >
        <Nav className="navigation">
          {links.map((link) => (
            <NavBarItem key={link.path} item={link} />
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
