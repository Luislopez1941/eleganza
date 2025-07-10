'use client'

import { useEffect, useState } from "react";
import ProductCard from "../ProductCard/ProductCard";
import "./styles/FeaturedProducts.css";
import APIs from "@/services/APIS";
import useServerStore from "@/zustand/server";

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



// const categories = [
//   { id: 1, name: "Todos" },
//   { id: 1, name: "Gala" },
//   { id: 3, name: "Cocktail" },
//   { id: 4, name: "Noche" },
//   { id: 5, name: "Fiesta" },
//   { id: 6, name: "Madrina" },
//   { id: 7, name: "Boda" },
//   { id: 8, name: "Graduación" },
//   { id: 9, name: "Opera" },
// ];


export default function FeaturedProducts() {
  const { baseUrl, store_id } = useServerStore();
  const [products, setProducts] = useState<any>([])

  const [categories, setCategories] = useState<any>([])

  const fetch = async () => {

    let store_id = 1
    try {
      let result: any = await APIs.getCategories(store_id)
      let response: any = await APIs.getProducts(result.data[0].id)
      setCategories(result.data)
      setProducts(response)
    } catch (error) {

    }
  }

  useEffect(() => {
    fetch()
  }, [])

  const [index, setIndex] = useState<any>(0)

  const getSections = async (category: any, i: number) => {
    setIndex(i)
    try {
      let result: any = await APIs.getProducts(category.id)
      setProducts(result)
    } catch (error) {

    }

  }

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
          {categories.map((category: any, i: number) => (
            <button onClick={() => getSections(category, i)}

              key={category.id}
              className={`featured-products__filter-button ${i == index ? 'active' : ''} ${category.name === "Todos"
                ? "featured-products__filter-button--active"
                : "featured-products__filter-button--inactive"
                }`}
            >
              {category.name}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <div className="featured-products__grid">
          {products?.map((product: any) => (
            <ProductCard key={product.id} product={product} />
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
