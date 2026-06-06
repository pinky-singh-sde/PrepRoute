import styles from "./Radio.module.scss";

interface RadioProps {
  label: string;
  checked: boolean;
  onChange: () => void;
}

export default function Radio({
  label,
  checked,
  onChange,
}: RadioProps) {
  return (
    <label className={styles.radio}>
      <input
        type="radio"
        checked={checked}
        onChange={onChange}
      />

      <span>{label}</span>
    </label>
  );
}