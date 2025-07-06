import { X, Search, Heart, User, ShoppingCart, Phone, Mail } from "lucide-react";
import "./styles/MobileMenu.css";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function MobileMenu({ isOpen, onClose }: MobileMenuProps) {
  return (
    <>
      {/* Backdrop */}
      <div
        className={`mobile-menu__backdrop ${isOpen ? "mobile-menu__backdrop--open" : ""}`}
        onClick={onClose}
      />

      {/* Menu */}
      <div className={`mobile-menu ${isOpen ? "mobile-menu--open" : ""}`}>
        {/* Header */}
        <div className="mobile-menu__header">
          <h2 className="mobile-menu__logo">
            ELEGANZA
            <span className="mobile-menu__logo-dot">●</span>
          </h2>
          <button className="mobile-menu__close" onClick={onClose}>
            <X />
          </button>
        </div>

        {/* Search */}
        <div className="mobile-menu__search">
          <Search className="mobile-menu__search-icon" />
          <input
            type="text"
            placeholder="Buscar vestidos..."
            className="mobile-menu__search-input"
          />
        </div>

        {/* Quick Actions */}
        <div className="mobile-menu__quick-actions">
          <button className="mobile-menu__quick-action">
            <Heart />
            <span>Favoritos</span>
            <span className="mobile-menu__badge">2</span>
          </button>
          <button className="mobile-menu__quick-action">
            <ShoppingCart />
            <span>Carrito</span>
            <span className="mobile-menu__badge">3</span>
          </button>
          <button className="mobile-menu__quick-action">
            <User />
            <span>Mi Cuenta</span>
          </button>
        </div>

        {/* Navigation */}
        <nav className="mobile-menu__nav">
          <div className="mobile-menu__nav-section">
            <h3 className="mobile-menu__nav-title">Colecciones</h3>
            <ul className="mobile-menu__nav-list">
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Nueva Colección
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Vestidos de Gala
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Cocktail & Fiesta
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Vestidos de Noche
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Madrina & Ceremonia
                </a>
              </li>
            </ul>
          </div>

          <div className="mobile-menu__nav-section">
            <h3 className="mobile-menu__nav-title">Ocasiones</h3>
            <ul className="mobile-menu__nav-list">
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Bodas
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Graduaciones
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Galas
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Cenas Especiales
                </a>
              </li>
            </ul>
          </div>

          <div className="mobile-menu__nav-section">
            <h3 className="mobile-menu__nav-title">Servicios</h3>
            <ul className="mobile-menu__nav-list">
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Guía de Tallas
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Cita Personal
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Envíos
                </a>
              </li>
              <li>
                <a href="#" className="mobile-menu__nav-link">
                  Devoluciones
                </a>
              </li>
            </ul>
          </div>
        </nav>

        {/* Special Offers */}
        <div className="mobile-menu__offers">
          <div className="mobile-menu__offer">
            <h4>✨ Envío Gratuito</h4>
            <p>En pedidos superiores a €150</p>
          </div>
          <div className="mobile-menu__offer">
            <h4>📞 Asesoramiento Personal</h4>
            <p>Llámanos para ayuda personalizada</p>
          </div>
        </div>

        {/* Contact */}
        <div className="mobile-menu__contact">
          <a href="tel:+34900123456" className="mobile-menu__contact-item">
            <Phone />
            <span>+34 900 123 456</span>
          </a>
          <a
            href="mailto:hola@eleganza.es"
            className="mobile-menu__contact-item"
          >
            <Mail />
            <span>hola@eleganza.es</span>
          </a>
        </div>

        {/* CTA Button */}
        <div className="mobile-menu__cta">
          <button className="mobile-menu__cta-button">
            Reservar Cita Personal
          </button>
        </div>
      </div>
    </>
  );
}
