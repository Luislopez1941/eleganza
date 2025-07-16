"use client";

import Link from "next/link";
import { ArrowLeft, Filter, ChevronDown } from "lucide-react";
import ProductCard from "../ProductCard/ProductCard";
import "./styles/CategoryPage.css";
import useServerStore from "@/zustand/server";
import { useEffect, useState } from "react";
import APIs from "@/services/APIS";

const categoryNames: Record<string, string> = {
  gala: "Vestidos de Gala",
  noche: "Vestidos de Noche",
  casual: "Vestidos Casuales",
  coctel: "Vestidos de Cóctel",
  bodas: "Vestidos para Bodas",
  trabajo: "Vestidos de Trabajo",
};

export default function CategoryPage() {
  const { categoryId } = useServerStore();
  const [products, setProducts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  const fetch = async () => {
    setLoading(true);
    try {

      if (categoryId == null) {
        let result = await APIs.getProductsAll();
        setProducts(result.data);
      } else {
        let result = await APIs.getProducts(categoryId);
        setProducts(result);
      }
      
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetch();
  }, [categoryId]);

  const categoryName = categoryNames[categoryId || ""] || "Categoría";

  const handleAddToCart = (product: any) => {
    console.log("Added to cart:", product);
  };

  const handleSendWhatsApp = (product: any) => {
    const message = `Hola! Me interesa el ${product.name} por €${product.price}. ¿Podrías darme más información?`;
    const whatsappUrl = `https://wa.me/1234567890?text=${encodeURIComponent(
      message,
    )}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      {/* Breadcrumb & Back Button */}
      <div className="breadcrumb">
        <div className="breadcrumb__container">
          <div className="breadcrumb__content">
            <Link href="/" className="breadcrumb__back">
              <ArrowLeft />
              Volver al inicio
            </Link>
            <span className="breadcrumb__separator">›</span>
            <span className="breadcrumb__current">{categoryName}</span>
          </div>
        </div>
      </div>

      {/* Category Header */}
      <div className="category-hero">
        <div className="category-hero__container">
          <div className="category-hero__content">
            <h1 className="category-hero__title">{categoryName}</h1>
            <p className="category-hero__count">
              {products?.length} vestidos disponibles
            </p>
          </div>
        </div>
      </div>

      {/* Filters & Sort */}
      <div className="filters-bar">
        <div className="filters-bar__container">
          <div className="filters-bar__content">
            <div className="filters-bar__left">
              <button className="filters-bar__button">
                <Filter />
                Filtros
              </button>
              <span className="filters-bar__count">
                {products?.length} productos
              </span>
            </div>
            <div className="filters-bar__right">
              <span className="filters-bar__sort-label">Ordenar por:</span>
              <button className="filters-bar__button">
                Más popular
                <ChevronDown />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Products Grid */}
      <div className="products-section">
        <div className="products-section__container">
          {loading ? (
            <div className="loading-state">
              <div className="loading-spinner" />
              <p className="loading-text">Cargando productos...</p>
            </div>
          ) : products?.length > 0 ? (
            <div className="products-grid">
              {products.map((product: any) => (
                <ProductCard
                  key={product.id}
                  product={product}
                  onAddToCart={handleAddToCart}
                  onSendWhatsApp={handleSendWhatsApp}
                />
              ))}
            </div>
          ) : (
            <div className="empty-state">
              <h3 className="empty-state__title">
                No hay productos en esta categoría
              </h3>
              <p className="empty-state__description">
                Explora otras categorías o vuelve más tarde para ver nuevos
                productos.
              </p>
              <Link href="/" className="empty-state__button">
                Volver al inicio
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
