import { Heart, Eye, ShoppingBag, MessageCircle } from "lucide-react";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "./styles/ProductCard.css";
import useServerStore from "@/zustand/server";

export default function ProductCard({ product }: any) {
  const { baseUrl, store_id } = useServerStore();
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [selectedSize, setSelectedSize] = useState<string>("");

  const handleSizeClick = (e: React.MouseEvent, size: string) => {
    e.stopPropagation();
    setSelectedSize(size);
  };

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    console.log("Added to cart:", { product, selectedSize });
  };

  const handleSendWhatsApp = (e: React.MouseEvent) => {
    e.stopPropagation();
    const currentImage = product?.images
      ? `${baseUrl}${product.images[currentImageIndex]}`
      : "";
    const sizeText = selectedSize ? ` - Talla: ${selectedSize}` : "";
    const message = `¡Hola! Me interesa este producto:

📷 Imagen: ${currentImage}
🏷️ Nombre: ${product.name}
💰 Precio: $${product.price}${sizeText}

¿Podrías darme más información?`;

    const whatsappUrl = `https://wa.me/9171133664?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, "_blank");
  };

  const handleWishlist = () => {
    console.log("Added to wishlist:", product);
  };

  const handleQuickView = () => {
    console.log("Quick view:", product);
  };

  // Check if product has multiple images for carousel
  const hasMultipleImages = product?.images && product.images.length > 1;

  return (
    <div className="product-card">
      {/* Image Container */}
      <div className="product-card__image-container">
        {hasMultipleImages ? (
          <Swiper
            modules={[Navigation, Pagination, EffectFade]}
            spaceBetween={0}
            slidesPerView={1}
            speed={800}
            effect="slide"
            navigation={{
              prevEl: ".swiper-button-prev-custom",
              nextEl: ".swiper-button-next-custom",
            }}
            pagination={{
              clickable: true,
            }}
            onSlideChange={(swiper) => setCurrentImageIndex(swiper.activeIndex)}
            className={`product-card__swiper ${product.images.length === 1 ? "single-image" : ""}`}
            loop={product.images.length > 2}
            autoplay={false}
            grabCursor={true}
            centeredSlides={true}
          >
            {product.images.map((image: string, index: number) => (
              <SwiperSlide key={index}>
                <img
                  src={`${baseUrl}${image}`}
                  alt={`${product.name} - Image ${index + 1}`}
                  className="product-card__image"
                />
              </SwiperSlide>
            ))}

            {/* Custom Navigation Buttons */}
            {product.images.length > 1 && (
              <>
                <div className="swiper-button-prev-custom product-card__carousel-navigation product-card__carousel-navigation--prev">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M15 18l-6-6 6-6" />
                  </svg>
                </div>
                <div className="swiper-button-next-custom product-card__carousel-navigation product-card__carousel-navigation--next">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path d="M9 18l6-6-6-6" />
                  </svg>
                </div>
              </>
            )}
          </Swiper>
        ) : (
          <img
            src={`${baseUrl}${product?.images}`}
            alt={product.name}
            className="product-card__image"
          />
        )}

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
        <h3 className="product-card__title">{product.name}</h3>

        {/* Price */}
        <div className="product-card__price-container">
          <span className="product-card__price">${product.price}</span>
        </div>

        {/* Size options */}
        <div className="product-card__sizes">
          {["XS", "S", "M", "L", "XL"].map((size) => {
            const isAvailable = product.variations?.some(
              (variation: any) => variation.size === size,
            );

            return (
              <button
                key={size}
                className={`product-card__size ${
                  isAvailable
                    ? "product-card__size--available"
                    : "product-card__size--unavailable"
                } ${selectedSize === size ? "product-card__size--selected" : ""}`}
                onClick={(e) =>
                  isAvailable ? handleSizeClick(e, size) : undefined
                }
                disabled={!isAvailable}
                title={`Talla ${size}`}
              >
                {size}
              </button>
            );
          })}
        </div>

        {/* Purchase buttons */}
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
