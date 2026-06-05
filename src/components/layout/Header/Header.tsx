import styles from "./Header.module.scss";

import { FiBell, FiChevronDown } from "react-icons/fi";

export default function Header() {
  return (
    <header className={styles.header}>
      <div />

      <div className={styles.rightSection}>
        <button className={styles.notification}>
          <FiBell />
        </button>

        <div className={styles.profile}>
          <img
            src="https://i.pravatar.cc/80"
            alt="profile"
          />

          <div>
            <h4>Alex Wando</h4>
            <span>Admin</span>
          </div>

          <FiChevronDown />
        </div>
      </div>
    </header>
  );
}