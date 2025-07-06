import { ArrowRight } from "lucide-react";
import "./styles/Layout.css";

export default function Layout() {
  return (
    <section className="hero">
      {/* Background */}
      <div className="hero__background"></div>

      {/* Elegant pattern overlay */}
      <div className="hero__pattern"></div>

      {/* Subtle decorative elements */}
      <div className="hero__decorative">
        <div className="hero__decorative-line-1"></div>
        <div className="hero__decorative-line-2"></div>
        <div className="hero__decorative-dot-1"></div>
        <div className="hero__decorative-dot-2"></div>
      </div>

      <div className="hero__content">
        <div>
          <p className="hero__collection-tag">Colección Primavera 2024</p>
          <h1 className="hero__title">Frescura y Estilo</h1>
        </div>

        <p className="hero__description">
          Renueva tu armario con nuestra selección de vestidos pensados para cada ocasión. Colores vibrantes, cortes modernos y telas ligeras que acompañan tu estilo esta temporada. Encuentra ese look que te hace sentir segura, cómoda y siempre a la moda.
        </p>

        <div className="hero__buttons">
          <a href="#" className="hero__button hero__button--primary">
            Explorar Vestidos
            <ArrowRight className="hero__button-icon" />
          </a>

          <a href="#" className="hero__button hero__button--secondary">
            Ver Lookbook
          </a>
        </div>

      
      </div>

    
    </section>
  );
}
