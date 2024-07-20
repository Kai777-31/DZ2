import styles from "./custom-input.module.css";

export function CustomInput({ value, onChange }) {
  return (
    <input
      value={value}
      onChange={onChange}
      className={styles.customInput}></input>
  );
}