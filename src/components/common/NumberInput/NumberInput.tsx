import { useState } from "react";
import styles from "./NumberInput.module.scss";

interface NumberInputProps {
  label?: string;
  value?: number;
  placeholder?: string;
  min?: number;
  max?: number;
  onChange?: (value: number) => void;
}

export default function NumberInput({
  label,
  value = 0,
  placeholder,
  min,
  max,
  onChange,
}: NumberInputProps) {
  const [inputValue, setInputValue] =
    useState(value);

  const increment = () => {
    const newValue =
      max !== undefined
        ? Math.min(inputValue + 1, max)
        : inputValue + 1;

    setInputValue(newValue);
    onChange?.(newValue);
  };

  const decrement = () => {
    const newValue =
      min !== undefined
        ? Math.max(inputValue - 1, min)
        : inputValue - 1;

    setInputValue(newValue);
    onChange?.(newValue);
  };

  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}

      <div className={styles.inputContainer}>
        <input
          type="number"
          value={inputValue}
          placeholder={placeholder}
          onChange={(e) => {
            const value =
              Number(e.target.value);

            setInputValue(value);
            onChange?.(value);
          }}
        />

<div className={styles.controls}>
  <button
    type="button"
    onClick={increment}
  >
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M3 7L6 4L9 7"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>

  <button
    type="button"
    onClick={decrement}
  >
    <svg
      width="12"
      height="12"
      viewBox="0 0 12 12"
      fill="none"
    >
      <path
        d="M3 5L6 8L9 5"
        stroke="currentColor"
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  </button>
</div>
      </div>
    </div>
  );
}