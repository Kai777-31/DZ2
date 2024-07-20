import styles from "./user.module.css";

export function User({ user }) {
  if (user === null || user === undefined) {
    return null;
  }

  return (
    <span className={styles.userText}>
      {user.firstName} {user.lastName}
    </span>
  );
}