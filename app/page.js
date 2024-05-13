import Image from "next/image";
import styles from "./page.module.css";
import Articles from "./articles/page";
import Team from "./components/TeamsFol/Team";
import Testimonialss from "./components/TestimonialsFol/Testimonialss";
import ArticlesLayoutOne from "./components/ArticleLayoutOne";

export default function Home() {
  return (
    <main className={styles.main}>
      <ArticlesLayoutOne />
      <Team />
      <Testimonialss />
      <Team />
      <Testimonialss />
      <Team />
      <Testimonialss />
      <Team />
      <Testimonialss />
      <Team />
      <Testimonialss />
      <Team />
      <Testimonialss />

      <Team />
      <Testimonialss />
     
    </main>
  );
}
