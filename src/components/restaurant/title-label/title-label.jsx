import styles from "./title-label.module.css";

export function TitleLabel({ label }) {
  return <h3 className={styles.titleLabel}>{label}</h3>;
}