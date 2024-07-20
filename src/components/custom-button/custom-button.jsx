import { useTheme } from "../theme-context/theme-context";
import styles from "./custom-button.module.css";
import classNames from "classnames";

export function CustomButton({
  onClick,
  children,
  viewVariant,
  colorViewVariant = "default",
  disabled,
}) {
  const { value: themeMode } = useTheme();

  return (
    <button
      disabled={disabled}
      onClick={onClick}
      className={classNames(styles.customButton, {
        [styles.wideButton]: viewVariant === "wide",
        [styles.defaultColorLight]:
          colorViewVariant === "default" && themeMode === "light",
        [styles.defaultColorDark]:
          colorViewVariant === "default" && themeMode === "dark",
        [styles.redColorLight]:
          colorViewVariant === "red" && themeMode === "light",
        [styles.redColorDark]:
          colorViewVariant === "red" && themeMode === "dark",
        [styles.blueColorLight]:
          colorViewVariant === "blue" && themeMode === "light",
        [styles.blueColorDark]:
          colorViewVariant === "blue" && themeMode === "dark",
      })}>
      {children}
    </button>
  );
}