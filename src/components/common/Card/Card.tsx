import styles from "./Card.module.scss";
import { ReactNode } from "react";

interface CardProps {
  children: ReactNode;
}

export default function Card({
  children,
}: CardProps) {
  return (
    <div className={styles.card}>
      {children}
    </div>
  );
}