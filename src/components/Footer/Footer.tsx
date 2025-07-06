import {
  Facebook,
  Instagram,
  Twitter,
  Youtube,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import "./styles/Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__container">
        <div className="footer__content">
          {/* Brand */}
          <div>
            <h3 className="footer__section-title">ELEGANZA</h3>
            <p className="footer__brand-description">
              Más de 15 años creando momentos únicos con vestidos que realzan tu
              belleza natural y elegancia.
            </p>
            <div className="footer__social-links">
              <button className="footer__social-button">
                <Facebook />
              </button>
              <button className="footer__social-button">
                <Instagram />
              </button>
              <button className="footer__social-button">
                <Twitter />
              </button>
              <button className="footer__social-button">
                <Youtube />
              </button>
            </div>
          </div>

          {/* Quick Links */}
          <div className="footer__section">
            <h4>Enlaces Rápidos</h4>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Nueva Colección
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Vestidos de Gala
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Cocktail
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Ocasiones Especiales
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Rebajas
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Tallas
                </a>
              </li>
            </ul>
          </div>

          {/* Customer Service */}
          <div className="footer__section">
            <h4>Atención al Cliente</h4>
            <ul className="footer__links">
              <li>
                <a href="#" className="footer__link">
                  Guía de Tallas
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Envíos y Devoluciones
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Cuidado de Prendas
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Preguntas Frecuentes
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Contacto
                </a>
              </li>
              <li>
                <a href="#" className="footer__link">
                  Cita Personal
                </a>
              </li>
            </ul>
          </div>

          {/* Newsletter */}
          <div className="footer__section">
            <h4>Newsletter</h4>
            <p className="footer__newsletter-description">
              Suscríbete para recibir las últimas tendencias y ofertas
              exclusivas.
            </p>
            <div className="footer__newsletter-form">
              <input
                type="email"
                placeholder="Tu email"
                className="footer__newsletter-input"
              />
              <button className="footer__newsletter-button">Suscribir</button>
            </div>

            {/* Contact Info */}
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <MapPin />
                Madrid, España
              </div>
              <div className="footer__contact-item">
                <Phone />
                +34 900 123 456
              </div>
              <div className="footer__contact-item">
                <Mail />
                info@eleganza.es
              </div>
            </div>
          </div>
        </div>

        <div className="footer__bottom">
          © 2024 Eleganza. Todos los derechos reservados. | Política de
          Privacidad | Términos y Condiciones
        </div>
      </div>
    </footer>
  );
}
