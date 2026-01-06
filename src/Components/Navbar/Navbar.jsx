import React, { useEffect, useState, useRef } from "react";
import "./Navbar.css";
import logo from "../../assets/logo.png";
import menu from "../../assets/menu.png";
import { Link } from "react-scroll";

const Navbar = () => {
  const [sticky, setSticky] = useState(false);
  const [mobileMenu, setMobileMenu] = useState(false);

  const menuRef = useRef(null);
  const menuIconRef = useRef(null);

  /* Sticky navbar */
  useEffect(() => {
    const handleScroll = () => {
      setSticky(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  /* Close menu when clicking outside */
  useEffect(() => {
    const handleClickOutside = (e) => {
      if (
        mobileMenu &&
        menuRef.current &&
        !menuRef.current.contains(e.target) &&
        !menuIconRef.current.contains(e.target)
      ) {
        setMobileMenu(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("touchstart", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [mobileMenu]);

  const toggleMenu = () => {
    setMobileMenu(prev => !prev);
  };

  const closeMenu = () => {
    setMobileMenu(false);
  };

  return (
    <nav className={`container ${sticky ? "dark-nav" : ""}`}>
      <img src={logo} alt="Logo" className="logo" />

      <ul
        ref={menuRef}
        className={`nav-links ${mobileMenu ? "show" : ""}`}
      >
        <li>
          <Link to="hero" smooth duration={500} onClick={closeMenu}>
            Home
          </Link>
        </li>
        <li>
          <Link to="about" smooth offset={-260} duration={500} onClick={closeMenu}>
            About
          </Link>
        </li>
        <li>
          <Link to="packages" smooth offset={-260} duration={500} onClick={closeMenu}>
            Packages
          </Link>
        </li>
        <li>
          <Link to="gallery" smooth offset={-260} duration={500} onClick={closeMenu}>
            Gallery
          </Link>
        </li>
        <li>
          <Link to="location" smooth offset={-260} duration={500} onClick={closeMenu}>
            Location
          </Link>
        </li>
        <li>
          <button className="btn">
            <Link to="contact" smooth offset={-260} duration={500} onClick={closeMenu}>
              Contact Us
            </Link>
          </button>
        </li>
      </ul>

      <img
        ref={menuIconRef}
        src={menu}
        alt="menu"
        className="menu-icon"
        onClick={toggleMenu}
      />
    </nav>
  );
};

export default Navbar;
