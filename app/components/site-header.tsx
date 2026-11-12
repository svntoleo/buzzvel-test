"use client";

import { useState } from "react";
import { LinkButton, Logo } from "./links";

const navigationLinks = [
  { href: "#courses", label: "Courses" },
  { href: "#people", label: "For Teams" },
  { href: "#how-it-works", label: "Community" },
  { href: "#contact", label: "About" },
];

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="site-header" id="top">
      <div className="nav-shell">
        <Logo />
        <nav
          id="mobile-menu"
          className={`main-nav${menuOpen ? " is-open" : ""}`}
          aria-label="Main navigation"
        >
          {navigationLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={() => setMenuOpen(false)}>
              {label}
            </a>
          ))}
          <a className="mobile-login" href="#contact" onClick={() => setMenuOpen(false)}>
            Log in
          </a>
          <LinkButton
            href="#courses"
            label="Start learning"
            className="mobile-join"
            onClick={() => setMenuOpen(false)}
          />
        </nav>
        <div className="nav-actions">
          <a href="#contact" className="login-link">Log in</a>
          <LinkButton
            href="#courses"
            label="Start learning"
            className="nav-cta"
          />
        </div>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
          onClick={() => setMenuOpen((open) => !open)}
        >
          <span />
          <span />
        </button>
      </div>
    </header>
  );
}
