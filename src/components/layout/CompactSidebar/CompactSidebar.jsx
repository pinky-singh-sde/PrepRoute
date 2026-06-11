import styles from "./CompactSidebar.module.scss";
import logo from "../../../assets/preproutelogo.png";

import {
  FiEdit,
  FiFileText,
  FiUsers,
  FiBell,
  FiSettings,
} from "react-icons/fi";

export default function CompactSidebar() {
  const icons = [
    FiEdit,
    FiFileText,
    FiUsers,
    FiBell,
    FiSettings,
  ];

  return (
    <aside className={styles.sidebar}>
      <div className={styles.logoContainer}>
        <img src={logo} alt="PrepRoute" />
      </div>

      <div className={styles.iconMenu}>
        {icons.map((Icon, index) => (
          <button key={index} className={styles.iconBtn}>
            <Icon />
          </button>
        ))}
      </div>
    </aside>
  );
}