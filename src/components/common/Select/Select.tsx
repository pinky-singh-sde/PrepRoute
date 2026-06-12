import styles from "./Select.module.scss";

interface Option {
  value: string;
  label: string;
}

interface SelectProps {
  label?: string;
  options: Option[];
  value?: string;
  onChange?: (
    e: React.ChangeEvent<HTMLSelectElement>
  ) => void;
}

export default function Select({
  label,
  options,
  value,
  onChange,
}: SelectProps) {
  return (
    <div className={styles.wrapper}>
      {label && (
        <label className={styles.label}>
          {label}
        </label>
      )}

      <select
        value={value}
        onChange={onChange}
        className={styles.select}
      >
        <option value="">
          Choose from Drop-down
        </option>

        {options.map((option) => (
          <option
            key={option.value}
            value={option.value}
          >
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
}

