import { NavLink } from 'react-router-dom';
import styles from './Navigation.module.css';

const Navigation = () => (
  <nav>
    <NavLink
      exact
      to="/"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Welcome
    </NavLink>

    <NavLink
      to="/users"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Users
    </NavLink>

    <NavLink
      to="/groups"
      className={styles.link}
      activeClassName={styles.activeLink}
    >
      Groups
    </NavLink>
  </nav>
);

export default Navigation;