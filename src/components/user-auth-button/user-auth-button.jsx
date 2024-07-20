import classNames from "classnames";
import { useTheme } from "../theme-context/theme-context";
import { useUser } from "../user-context/user-context";
import styles from "./user-auth-button.module.css";

export function UserAuthButton() {
  const { value: user, authUser } = useUser();
  const { value: themeMode } = useTheme();

  const buttonText = user === undefined ? "Sign in" : "Sign out";

  return (
    <button
      className={classNames({
        [styles.lightButton]: themeMode === "light",
        [styles.darkButton]: themeMode === "dark",
      })}
      onClick={authUser}>
      {buttonText}
    </button>
  );
}