import Image from "next/image";
import CategoryPage from "@/components/CategoryPage/CategoryPage";
import Header from "@/components/Header/Header";
import Footer from "@/components/Footer/Footer";

export default function Categories() {
  return (
    <div >
      <Header />
      <CategoryPage />
      <Footer />
    </div>
  );
}
