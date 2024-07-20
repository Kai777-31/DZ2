import { Counter } from "../../counter/counter";
import { useUser } from "../../user-context/user-context";
import { TitleLabel } from "../title-label/title-label";
import styles from "./menu.module.css";

export function Menu({ menu }) {
  const { value: user } = useUser();

  return (
    <>
      <TitleLabel label="Меню:" />
      <ul className={styles.menuTextGridWithGap}>
        {menu.map((dish) => (
          <>
            <li className={styles.menuTextGrid}>
              <span>Name: {dish.name}</span>
              <span>Price: {dish.price}</span>
              <span>
                Ingredients:{" "}
                {dish.ingredients.map((ing, i, ingredients) => {
                  return i === ingredients.length - 1 ? ing : ing + ", ";
                })}
              </span>
              {user ? <Counter /> : null}
            </li>
          </>
        ))}
      </ul>
    </>
  );
}