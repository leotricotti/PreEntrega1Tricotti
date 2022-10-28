import HeroImg from "../../assets/images/landing/hero/hero-desktop.jpg";
import HeroMovil from "../../assets/images/landing/hero/hero-movil.jpg";
import styles from "./HeroSection.module.css";
import { HeroBtn } from "../Buttons/Buttons";

export function HeroSection() {
  return (
    <section className={styles.heroContainer}>
      <img src={HeroImg} alt="influencers" className={styles.heroDesktop} />
      <img src={HeroMovil} alt="influencers" className={styles.heroMovil} />
      <HeroBtn />
    </section>
  );
}
