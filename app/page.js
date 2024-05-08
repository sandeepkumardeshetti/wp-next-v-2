import Image from "next/image";
import styles from "./page.module.css";
import Articles from "./articles/page";
import Team from "./components/TeamsFol/Team";
import Testimonialss from "./components/TestimonialsFol/Testimonialss";

export default function Home() {
  return (
    <main className={styles.main}>
      <Articles />
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
