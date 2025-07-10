import { ArrowRight } from "lucide-react";
import "./styles/Layout.css";

export default function Layout() {
  return (
    <section className="layout">
      {/* Background */}
      <div className="layout__background" />

      {/* Content */}
      <div className="layout__content">
        <div className="layout__collection-tag">Colección Verano 2025</div>

        <h1 className="layout__title">Frescura y Estilo</h1>

        <div className="layout__buttons">
          <a href="#" className="layout__button">
            Explorar Colección
            <ArrowRight className="layout__button-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
