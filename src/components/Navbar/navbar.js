import React, { useState } from 'react';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoClose } from 'react-icons/io5';
import './navbar.css';

function Navbar() {
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About' },
    { href: '#projects', label: 'Projects' },
    { href: '#contact', label: 'Contact' },
  ];

  return (
    <header className="nav-header">
      <nav className="nav">
        <div className="brand">JD</div>

        {/* Desktop links */}
        <ul className="nav-links">
          {navItems.map(({ href, label }) => (
            <li key={href}>
              <a href={href}>{label}</a>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="menu-btn"
          aria-label="Toggle menu"
          onClick={() => setOpen(v => !v)}
        >
          {open ? <IoClose size={20} /> : <GiHamburgerMenu size={20} />}
        </button>
      </nav>

      {/* Mobile dropdown */}
      <div className={`mobile-menu ${open ? 'open' : ''}`}>
        {navItems.map(({ href, label }) => (
          <a key={href} href={href} onClick={() => setOpen(false)}>
            {label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Navbar;
