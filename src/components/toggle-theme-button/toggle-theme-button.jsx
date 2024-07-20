import classNames from "classnames";
import { useTheme } from "../theme-context/theme-context";
import styles from "./toggle-theme-button.module.css";

export function ToggleThemeButton() {
  const { value: themeMode, toggleTheme } = useTheme();

  const buttonText = themeMode === "light" ? "dark theme" : "light theme";

  return (
    <button
      className={classNames(styles.button, {
        [styles.lightButton]: themeMode === "light",
        [styles.darkButton]: themeMode === "dark",
      })}
      onClick={toggleTheme}>
      {buttonText}
    </button>
  );
}