import { Heart, Eye, ShoppingBag } from "lucide-react";
import "./styles/ProductCard.css";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  category: string;
}

export default function ProductCard({
  name,
  price,
  originalPrice,
  image,
  isNew,
  isSale,
  category,
}: ProductCardProps) {
  return (
    <div className="product-card">
      {/* Image Container */}
      <div className="product-card__image-container">
        <img src={image} alt={name} className="product-card__image" />

        {/* Badges */}
        <div className="product-card__badges">
          {isNew && (
            <span className="product-card__badge product-card__badge--new">
              NUEVO
            </span>
          )}
          {isSale && (
            <span className="product-card__badge product-card__badge--sale">
              OFERTA
            </span>
          )}
        </div>

        {/* Quick actions */}
        <div className="product-card__actions">
          <button className="product-card__action-button">
            <Heart />
          </button>
          <button className="product-card__action-button">
            <Eye />
          </button>
        </div>

        {/* Add to cart button - shows on hover */}
        <button className="product-card__add-to-cart">
          <ShoppingBag />
          AÑADIR AL CARRITO
        </button>
      </div>

      {/* Content */}
      <div className="product-card__content">
        <p className="product-card__category">{category}</p>
        <h3 className="product-card__title">{name}</h3>

        {/* Price */}
        <div className="product-card__price-container">
          <span className="product-card__price">€{price}</span>
          {originalPrice && (
            <span className="product-card__original-price">
              €{originalPrice}
            </span>
          )}
        </div>

        {/* Size options */}
        <div className="product-card__sizes">
          {["XS", "S", "M", "L", "XL"].map((size) => (
            <button key={size} className="product-card__size">
              {size}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}
