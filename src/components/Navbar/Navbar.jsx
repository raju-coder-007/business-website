import React, { useState, useEffect } from "react";
import "./Navbar.css";
import Logo from "../../assets/logo/logo.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-scroll";

const Navbar = () => {
  // sidenavbar
  const [sidenav, setSidenav] = useState(false);

  // stickybar

  const [sticky, setSticky] = useState(false);

  const sidenavShow = () => {
    setSidenav(!sidenav);
  };

  // scroll fixed Navbar

  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // menu icon
  const menuIcon = <FontAwesomeIcon icon={faBars} />;

  return (
    <>
      <header id="site_header" className={`${sticky ? "sticky" : ""}`}>
        <div className="container">
          <nav className="navbar" id="Navbar">
            <div className="navbar_brand">
              <a href="/">
                <img src={Logo} alt="Logo" />
              </a>
            </div>
            <div className="navbar_toggler" onClick={sidenavShow}>
              {menuIcon}
            </div>
            <div className={`menu_items ${sidenav === true ? "active" : " "}`}>
              <ul>
                <li>
                  <Link activeClass="active" to="home" spy={true} smooth={true}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="about"
                    spy={true}
                    smooth={true}
                    offset={50}>
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="services"
                    spy={true}
                    smooth={true}
                    offset={50}>
                    Services
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="blog"
                    spy={true}
                    smooth={true}
                    offset={50}>
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    activeClass="active"
                    to="contact"
                    spy={true}
                    smooth={true}
                    offset={50}>
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
};

export default Navbar;
