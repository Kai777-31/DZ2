import logo from "../../../images/restaurants.png";
import { ToggleThemeButton } from "../../toggle-theme-button/toggle-theme-button";
import { UserAuthButton } from "../../user-auth-button/user-auth-button";
import { useUser } from "../../user-context/user-context";
import styles from "./header.module.css";
import { User } from "./user/user";

export function Header() {
  const { value: user } = useUser();

  return (
    <header className={styles.header}>
      <div className={styles.headerText}>
        <ToggleThemeButton />
        <h1>Restaurants</h1>
      </div>
      <div className={styles.headerText}>
        <User user={user} />
        <UserAuthButton />
        <img
          className={styles.img}
          src={logo}
        />
      </div>
    </header>
  );
}