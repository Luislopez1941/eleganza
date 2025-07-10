import "./styles/CallToAction.css";

export default function CallToAction() {
  return (
    <section className="cta">
      <div className="cta__container">
        <h2 className="cta__title">¿Lista para Encontrar tu Vestido Ideal?</h2>
        <p className="cta__description">
          Reserva una cita personal con nuestras asesoras de estilo y descubre
          la colección completa en nuestro showroom exclusivo.
        </p>
        <div className="cta__buttons">
          <button className="cta__button cta__button--primary">
            Reservar Cita Personal
          </button>
          <button className="cta__button cta__button--secondary">
            Llamar Ahora: 998 486 9828
          </button>
        </div>
      </div>
    </section>
  );
}
