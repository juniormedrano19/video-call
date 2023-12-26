
import { Footer } from "./Layout/Footer";
import { Header } from "./Layout/Header";
import { Hero } from "./Layout/Hero";
import { Section } from "./Layout/Section";
import styles from "./landing.module.css";

export const Landing = () => {
  return (
    <div className={styles.container}>
      <div className={styles.wrapper}>
        <Header />

        <Section />

        <Hero />
      
        <Footer />
      </div>
    </div>
  );
};
