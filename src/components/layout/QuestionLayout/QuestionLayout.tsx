import CompactSidebar from "../CompactSidebar/CompactSidebar";
import Header from "../Header/Header";

import styles from "./QuestionLayout.module.scss";

interface Props {
  children: React.ReactNode;
}

export default function QuestionLayout({
  children,
}: Props) {
  return (
    <div className={styles.layout}>
      <CompactSidebar />

      <div className={styles.rightSection}>
        <Header />

        {children}
      </div>
    </div>
  );
}