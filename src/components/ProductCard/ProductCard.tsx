'use client'

import { Heart, Eye, ShoppingBag, MessageCircle } from "lucide-react";
import "./styles/ProductCard.css";
import useServerStore from "@/zustand/server";

interface ProductCardProps {
  id: number;
  name: string;
  price: number;
  originalPrice?: number;
  image: string;
  isNew?: boolean;
  isSale?: boolean;
  category: string;
  variations?: Array<{ size: string }>;
  onAddToCart?: (product: any) => void;
  onSendWhatsApp?: (product: any) => void;
}

export default function ProductCard({ product }: any) {
 const { baseUrl, store_id } = useServerStore();

  const handleAddToCart = () => {
    onAddToCart?.(product);
  };

  const handleSendWhatsApp = () => {
    onSendWhatsApp?.(product);
  };

  const handleWishlist = () => {
    // TODO: Implement wishlist functionality
    console.log("Added to wishlist:", product);
  };

  const handleQuickView = () => {
    // TODO: Implement quick view functionality
    console.log("Quick view:", product);
  };

  return (
    <div className="product-card">
      {/* Image Container */}
      <div className="product-card__image-container">
        <img src={`${baseUrl}${product?.images[0]}`} alt={product.name} className="product-card__image" />

        {/* Badges */}
        {/* <div className="product-card__badges">
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
        </div> */}

        {/* Quick actions */}
        <div className="product-card__actions">
          <button
            className="product-card__action-button"
            onClick={handleWishlist}
            title="Añadir a favoritos"
          >
            <Heart />
          </button>
          <button
            className="product-card__action-button"
            onClick={handleQuickView}
            title="Vista rápida"
          >
            <Eye />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="product-card__content">
        {/* <div className="product-card__category">{category}</div> */}
        <h3 className="product-card__title">{product.name}</h3>

        {/* Price */}
        <div className="product-card__price-container">
          <span className="product-card__price">${product.price}</span>
          {/* {originalPrice && (
            <span className="product-card__original-price">
              ${originalPrice}
            </span>
          )} */}
        </div>

        {/* Size options */}
        <div className="product-card__sizes">
          {["XS", "S", "M", "L", "XL"].map((size) => {
            const isAvailable = product.variations.some(
              (variation: any) => variation.size === size
            );

            return (
              <button
                key={size}
                className={`product-card__size ${isAvailable
                    ? "product-card__size--available"
                    : "product-card__size--unavailable"
                  }`}
                disabled={!isAvailable}
                title={`Talla ${size}`}
              >
                {size}
              </button>
            );
          })}
        </div>

        {/* Purchase buttons - improved visual design */}
        <div className="product-card__purchase-buttons">
          <button
            className="product-card__whatsapp-buy"
            onClick={handleSendWhatsApp}
            title="Comprar por WhatsApp"
          >
            <MessageCircle />
            <span>WhatsApp</span>
          </button>
          <button
            className="product-card__add-to-cart"
            onClick={handleAddToCart}
            title="Añadir al carrito"
          >
            <ShoppingBag />
            <span>Carrito</span>
          </button>
        </div>
      </div>
    </div>
  );
}
