import Image from "next/image";
import styles from "./page.module.css";
import HomeMain from "@/pages/Home/Home";

export default function Home() {
  return (
    <div className={styles.page}>
      <HomeMain />
    </div>
  );
}
