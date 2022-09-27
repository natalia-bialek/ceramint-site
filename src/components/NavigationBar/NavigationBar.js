import "./NavigationBar.css";
import { useState } from "react";
import logo from "../../images/logo.png";
import { GoTriangleDown } from "react-icons/go";

const LINKS_DATA = [
  {
    name: "Aktualności",
    path: "/",
  },
  {
    name: "Warsztaty",
    path: "/warsztaty",
  },
  {
    name: "Sklep",
    path: "https://ceramintshopmaster.gatsbyjs.io/",
  },
  {
    name: "Kontakt",
    path: "/kontakt",
  },
];

function NavBarItem({ item }) {
  const [show, setShow] = useState(false);

  // if link has subpages (is dropdown link)
  // if (item.subpages?.length) {
  //   return (
  //     <p
  //       onMouseOver={() => setShow(true)}
  //       onMouseOut={() => setShow(false)}
  //       className="nav__link text--uppercase dropdown"
  //     >
  //       <span>
  //         {item.name}&nbsp;
  //         <GoTriangleDown />
  //       </span>
  //       <div className={"dropdown__content " + `${show ? "opened" : ""}`}>
  //         {item.subpages.map((subpage) => (
  //           <a
  //             eventKey={item.subpages.indexOf(subpage)}
  //             key={subpage.path}
  //             href={item.path + subpage.path}
  //             className="nav__link"
  //           >
  //             {subpage.name}
  //           </a>
  //         ))}
  //       </div>
  //     </p>
  //   );
  // }

  //default link
  return (
    <a href={item.path} key={item.path} className="nav__link text--uppercase">
      {item.name}
    </a>
  );
}

export default function NavigationBar() {
  const [isOpen, setOpen] = useState(false);
  console.log(isOpen);
  return (
    <nav>
      <div className="nav__logo">
        <a href="/">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div
        className="nav__toggler"
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={"nav__links " + `${isOpen ? "opened" : ""}`}>
        {LINKS_DATA.map((link) => (
          <NavBarItem key={link.path} item={link} />
        ))}
      </div>
    </nav>
  );
}
