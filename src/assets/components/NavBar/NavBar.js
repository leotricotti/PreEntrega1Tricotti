import { ReactComponent as Logo } from "../../images/logo/converse.svg";
import { MenuItems } from "./MenuItems";
import styles from "./NavBar.module.css";

export function NavBar() {
  return (
    <header className={styles.headerContainer}>
      <div className={styles.navRight}>
        <div className="logoContainer">
          {}
          <Logo />
        </div>
        <nav className="nav-container">
          <ul className={styles.navItem}>
            {MenuItems.map((item) => {
              return (
                <li key={item.title}>
                  <a href={item.url} className={item.cname}>
                    {item.title}
                  </a>
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
      <div className="form-container">
        <form action="">
          <div className="input-container">
            <input type="text" placeholder="Buscar" />
            <i className="fa-solid fa-magnifying-glass"></i>
          </div>
        </form>
      </div>
    </header>
  );
}
