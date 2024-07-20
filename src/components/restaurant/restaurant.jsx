import { Menu } from "./menu/Menu";
import styles from "./restaurant.module.css";
import { Reviews } from "./reviews/Reviews";

export function Restaurant({ rest }) {
  return (
    <div>
      <h2 className={styles.restaurantLabel}>{rest.name}</h2>
      {rest.menu?.length ? (
        <Menu menu={rest.menu} />
      ) : (
        <span>Menu is empty</span>
      )}
      {rest.reviews?.length ? (
        <Reviews reviews={rest.reviews} />
      ) : (
        <span>Reviews is empty</span>
      )}
    </div>
  );
}