'use client'

import { useEffect, useState } from "react";
import "./styles/OccasionCategories.css";
import useServerStore from "@/zustand/server";
import APIs from "@/services/APIS";
import { useRouter } from "next/navigation";

export default function OccasionCategories() {
  const { baseUrl } = useServerStore();
  const setCategoryId = useServerStore(state => state.setCategoryId);
  const router = useRouter();
  const [categories, setCategories] = useState<any>([])

  const fetch = async () => {

    let store_id = 1
    try {
      let result: any = await APIs.getCategories(store_id)
      setCategories(result.data)
    } catch (error) {

    }
  }

  useEffect(() => {
    fetch()
  }, [])

  const routerSection = (category: any) => {
    setCategoryId(category.id)
    router.push(`/category`);
  }

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
          {categories.map((category: any, index: any) => (
            <div key={index} className="occasion-categories__card" onClick={() => routerSection(category)}>
              <div className="occasion-categories__image-container">
                <img
                  src={`${baseUrl}${category.image}`}
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
