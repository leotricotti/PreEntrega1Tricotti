import logo from "../../images/logo/converse.png";
import { MenuItems } from "./MenuItems";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navToggle}>
        <i className="fa-solid fa-bars"></i>
      </div>
      <div className={styles.navRight}>
        <div className={styles.logoContainer}>
            <a href="/">
              <img src={logo} alt="Logo" className={styles.headerLogo} />
            </a>
        </div>
        <nav className={styles.navContainer}>
          <ul className={styles.navItem}>
            {MenuItems.map((item) => {
              return (
                <li key={item.title}>
                  <a href={item.url} className={styles.navLink}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className={styles.formContainer}>
        <form action="">
          <div className= {styles.inputContainer}>
            <input type="text" placeholder="Buscar" className={styles.searchInput}/>
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
      </div>
    </header>
  );
}
