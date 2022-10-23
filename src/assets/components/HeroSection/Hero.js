import heroImg from "../../images/landing/hero/hero-desktop.jpg";
import heroMovil from "../../images/landing/hero/hero-movil.jpg";
import styles from "./HeroSection.module.css";

export function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <img src={heroImg} alt="influencers" className={styles.heroDesktop}/>
      <img src={heroMovil} alt="influencers" className={styles.heroMovil}/>
      <a href="/" className={styles.heroBtn}>ver más</a>
    </section>
  );
}
