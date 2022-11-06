import styles from "./NavigationBar.module.css";
import { useState } from "react";
import logo from "../../images/logo.png";
import LINKS_DATA from "../../mock/navigation-links.js";
import classNames from "classnames";
// import { GoTriangleDown } from "react-icons/go";

function NavBarItem({ item }) {
  //const [show, setShow] = useState(false);

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
    <a href={item.path} key={item.path} className={styles.nav__link}>
      {item.name}
    </a>
  );
}

export default function NavigationBar() {
  const [isOpen, setOpen] = useState(false);
  const linksClass = classNames(styles.nav__links, {
    [styles.opened]: isOpen,
  });

  //console.log(LINKS_DATA);
  return (
    <nav className={styles.nav}>
      <div className={styles.nav__logo}>
        <a href="/ceramint-site">
          <img src={logo} alt="Logo" />
        </a>
      </div>
      <div
        className={styles.nav__toggler}
        onClick={() => {
          setOpen(!isOpen);
        }}
      >
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className={linksClass}>
        {LINKS_DATA.map((link) => (
          <NavBarItem key={link.path} item={link} />
        ))}
      </div>
    </nav>
  );
}
