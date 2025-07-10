'use client'

import { Search, ShoppingCart, Heart, User, Menu } from "lucide-react";
import { useState } from "react";
import MobileMenu from "./MobileMenu";
import "./styles/Header.css";

export default function Header() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <header className="header">
      <div className="header__container">
        {/* Top bar */}
        <div className="header__top-bar">
          <p className="header__top-bar-text">
            ✨ Disponibilidad inmediata en Cancún
          </p>
          <div className="header__contact-info">
            <span>📞 998 486 9828</span>
            <span>📧 eleganza@eleganza.com</span>
          </div>
        </div>

        {/* Main header */}
        <div className="header__main">
          <div className="header__left">
            <button className="header__menu-button" onClick={toggleMobileMenu}>
              <Menu />
            </button>

            <h1 className="header__logo">
              ELEGANZA
              <span className="header__logo-dot">●</span>
            </h1>

            <nav className="header__nav">
              <a href="#" className="header__nav-link">
                Nueva Colección
              </a>
              <a href="#" className="header__nav-link">
                Vestidos de Gala
              </a>
              <a href="#" className="header__nav-link">
                Cocktail
              </a>
              <a href="#" className="header__nav-link">
                Ocasiones
              </a>
            </nav>
          </div>
          <div className="header__right">
            <div className="header__search">
              <Search className="header__search-icon" />
              <input type="text" placeholder="Buscar vestidos elegantes..." className="header__search-input"/>
            </div>
            <button className="header__icon-button">
              <User />
            </button>

            <button className="header__icon-button">
              <ShoppingCart />
              <span className="header__badge">3</span>
            </button>
          </div>
        </div>
      </div>

      <MobileMenu isOpen={isMobileMenuOpen} onClose={closeMobileMenu} />
    </header>
  );
}
