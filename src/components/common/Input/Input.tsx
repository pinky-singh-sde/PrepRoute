import styles from "./Input.module.scss";
import { InputHTMLAttributes, forwardRef } from "react";

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
}

const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className={styles.wrapper}>
        {label && (
          <label className={styles.label}>
            {label}
          </label>
        )}

        <input
          ref={ref}
          className={styles.input}
          {...props}
        />

        {error && (
          <span className={styles.error}>
            {error}
          </span>
        )}
      </div>
    );
  }
);

export default Input;