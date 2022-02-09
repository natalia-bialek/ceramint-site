import { useState} from "react"
import { Navbar, NavDropdown, Dropdown, Nav } from "react-bootstrap";
import "./NavigationBar.css";
import logo from "../images/logo.png";

const links = [
  {
    name: "Aktualności",
    path: "/",
  },
  {
    name: "O szkole",
    path: "/o-szkole",
    subpages: [
      {
        name: "Statut",
        path: "/statut",
      },
      {
        name: "Program szkoły",
        path: "/program-szkoly",
      },
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
    name: "Program Nauczania",
    path: "/program-nauczania",
    subpages: [
      {
        name: "Terminy zjazdów na rok 2021/2022",
        path: "/plan-zajec",
      },
      {
        name: "Tematy zjazdów na rok 2021/2022",
        path: "/tematy-zjazdow",
      },
    ],
  },
  {
    name: "Warsztaty ceramiki",
    path: "/warsztaty-ceramiki",
    subpages: [
      {
        name: "Kursy ceramiki online",
        path: "/kursy-ceramiki-online",
      },
      {
        name: "KRONIKA CERAMIKA – Rozdział I – Lepienie i szkliwienie",
        path: "/lepienie-i-szkliwienie",
      },
      {
        name: "MOJA MAŁA MANUFAKTURA – Odlewanie z mas lejnych",
        path: "/odlewanie-z-mas-lejnych",
      },
      {
        name: "POMALUJ SWÓJ ŚWIAT – techniki zdobienia",
        path: "/techniki-zdobienia",
      },
      {
        name: "WKRĘĆ SIĘ – Warsztaty toczenia na kole garncarskim I stopnia",
        path: "/warsztaty-toczenia-na-kole-garncarskim-i-stopnia",
      },
      {
        name: "ODKRYJ BIAŁE ZŁOTO – Warsztaty porcelany",
        path: "/warsztaty-porcelany",
      },
      {
        name: "Warsztaty Formierskie I stopnia",
        path: "/warsztaty-formerskie-i-stopnia",
      },
      {
        name: "Szkolenie z obsługi pieca elektrycznego do wypału",
        path: "/szkolenie-z-obslugi-pieca-elektrycznego-do-wypalu",
      },
    ],
  },
  {
    name: "Rekrutacja",
    path: "/rekrutacja",
  },
  {
    name: "Pracownia",
    path: "/pracownia",
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
  const hideDropdown = (e) => {
    setShow(false);
  };

  if (item.subpages?.length) {
    return (
      <NavDropdown
        title={item.name}
        show={show}
        onMouseEnter={showDropdown}
        onMouseLeave={hideDropdown}
        id="nav-dropdown"
      >
        {item.subpages.map((subpage) => (
          <NavDropdown.Item
            eventKey=""
            key={subpage.name}
            href={item.path + subpage.path}
          >
            {subpage.name}
          </NavDropdown.Item>
        ))}
      </NavDropdown>
    );
  }

  //default case
  return (
    <Nav.Link className="navbar__link" href={item.path} key={item.name}>
      {item.name}
    </Nav.Link>
  );
}

export default function NavigationBar() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" fixed="top">
      <img src={logo} className="logo" />
      <Navbar.Toggle aira-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="navigation" fill>
          {links.map((link) => (
            <NavBarItem item={link} />
          ))}
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
