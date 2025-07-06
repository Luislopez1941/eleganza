import ProductCard from "../ProductCard/ProductCard";
import "./styles/FeaturedProducts.css";

const featuredProducts = [
  {
    id: 1,
    name: "Vestido de Gala Celestial",
    price: 599,
    originalPrice: 799,
    image: "/api/placeholder/400/600",
    isNew: true,
    isSale: true,
    category: "Gala",
  },
  {
    id: 2,
    name: "Vestido de Cocktail Dorado",
    price: 399,
    image: "/api/placeholder/400/600",
    isNew: false,
    isSale: false,
    category: "Cocktail",
  },
  {
    id: 3,
    name: "Vestido de Noche Elegante",
    price: 699,
    image: "/api/placeholder/400/600",
    isNew: true,
    isSale: false,
    category: "Noche",
  },
  {
    id: 4,
    name: "Vestido de Fiesta Clásico",
    price: 459,
    originalPrice: 550,
    image: "/api/placeholder/400/600",
    isNew: false,
    isSale: true,
    category: "Fiesta",
  },
  {
    id: 5,
    name: "Vestido de Madrina Sofisticado",
    price: 749,
    image: "/api/placeholder/400/600",
    isNew: false,
    isSale: false,
    category: "Madrina",
  },
  {
    id: 6,
    name: "Vestido de Graduación",
    price: 329,
    image: "/api/placeholder/400/600",
    isNew: true,
    isSale: false,
    category: "Graduación",
  },
  {
    id: 7,
    name: "Vestido de Boda Civil",
    price: 899,
    originalPrice: 1099,
    image: "/api/placeholder/400/600",
    isNew: false,
    isSale: true,
    category: "Boda",
  },
  {
    id: 8,
    name: "Vestido de Opera Premium",
    price: 1299,
    image: "/api/placeholder/400/600",
    isNew: true,
    isSale: false,
    category: "Opera",
  },
];

const categories = [
  "Todos",
  "Gala",
  "Cocktail",
  "Noche",
  "Fiesta",
  "Madrina",
  "Boda",
];

export default function FeaturedProducts() {
  return (
    <section className="featured-products">
      <div className="featured-products__container">
        <div className="featured-products__header">
          <h2 className="featured-products__title">Colección Destacada</h2>
          <p className="featured-products__description">
            Descubre nuestros diseños más exclusivos, creados para mujeres que
            buscan la perfección en cada detalle y ocasión especial.
          </p>
        </div>

        {/* Category filters */}
        <div className="featured-products__filters">
          {categories.map((category) => (
            <button
              key={category}
              className={`featured-products__filter-button ${
                category === "Todos"
                  ? "featured-products__filter-button--active"
                  : "featured-products__filter-button--inactive"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="featured-products__grid">
          {featuredProducts.map((product) => (
            <ProductCard key={product.id} {...product} />
          ))}
        </div>

        <div className="featured-products__cta">
          <a href="#" className="featured-products__cta-button">
            Ver Toda la Colección
          </a>
        </div>
      </div>
    </section>
  );
}
