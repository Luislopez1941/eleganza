'use client'

import { ArrowRight } from "lucide-react";
import Link from "next/link";
import "./styles/Layout.css";
import useServerStore from "@/zustand/server";
import { useRouter } from "next/navigation";


export default function Layout() {
  const setCategoryId = useServerStore(state => state.setCategoryId);
  const router = useRouter();


  const routerSection = () => {

    setCategoryId(null)
    localStorage.removeItem('id_category');
    router.push(`/category`);
  }
  return (
    <section className="layout">
      {/* Background */}
      <div className="layout__background" />

      {/* Content */}
      <div className="layout__content">
        <div className="layout__collection-tag">Colección Verano 2025</div>
        <h1 className="layout__title">Frescura y Estilo</h1>
        <div className="layout__buttons">
          <a onClick={routerSection} className="layout__button">
            Explorar Colección
            <ArrowRight className="layout__button-icon" />
          </a>
        </div>
      </div>
    </section>
  );
}
