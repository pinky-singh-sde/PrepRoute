import styles from "./Sidebar.module.scss";
import { NavLink } from "react-router-dom";

import logo from "../../../assets/preproutelogo.png";

import {
  FiHome,
  FiEdit,
  FiClipboard,
} from "react-icons/fi";

export default function Sidebar() {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="PrepRoute" />
      </div>

      <nav>
        <NavLink
          to="/dashboard"
          className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          <FiHome />
          Dashboard
        </NavLink>

        <NavLink
          to="/tests/create"
          className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          <FiEdit />
          Test Creation
        </NavLink>

        <NavLink
          to="/tests/tracking"
          className={({ isActive }) =>
            isActive
              ? `${styles.link} ${styles.active}`
              : styles.link
          }
        >
          <FiClipboard />
          Test Tracking
        </NavLink>
      </nav>
    </aside>
  );
}