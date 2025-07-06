import "./styles/OccasionCategories.css";

const categories = [
  {
    name: "Bodas & Ceremonias",
    image: "/api/placeholder/400/300",
    count: "150+ estilos",
  },
  {
    name: "Galas & Eventos",
    image: "/api/placeholder/400/300",
    count: "200+ diseños",
  },
  {
    name: "Cocktail & Fiestas",
    image: "/api/placeholder/400/300",
    count: "120+ opciones",
  },
  {
    name: "Graduaciones",
    image: "/api/placeholder/400/300",
    count: "80+ modelos",
  },
  {
    name: "Cenas de Gala",
    image: "/api/placeholder/400/300",
    count: "100+ vestidos",
  },
  {
    name: "Ocasiones Especiales",
    image: "/api/placeholder/400/300",
    count: "180+ estilos",
  },
];

export default function OccasionCategories() {
  return (
    <section className="occasion-categories">
      <div className="occasion-categories__container">
        <div className="occasion-categories__header">
          <h2 className="occasion-categories__title">Compra por Ocasión</h2>
          <p className="occasion-categories__description">
            Encuentra el vestido perfecto para cada momento especial de tu vida
          </p>
        </div>

        <div className="occasion-categories__grid">
          {categories.map((category, index) => (
            <div key={index} className="occasion-categories__card">
              <div className="occasion-categories__image-container">
                <img
                  src={category.image}
                  alt={category.name}
                  className="occasion-categories__image"
                />
                <div className="occasion-categories__overlay"></div>
                <div className="occasion-categories__content">
                  <h3 className="occasion-categories__card-title">
                    {category.name}
                  </h3>
                  <p className="occasion-categories__card-count">
                    {category.count}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
