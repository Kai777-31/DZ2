import { Restaurant } from "../Restaurant/Restaurant";
import { restaurants } from "../../materials/mock";
import { useState } from "react";
import { Layout } from "../layout/Layout";
import { CustomButton } from "../custom-button/custom-button";
import { ScrollProgressBar } from "../scroll-progress-bar/scroll-progress-bar";
import { ThemeContextProvider } from "../theme-context/theme-context";
import { UserContextProvider } from "../user-context/user-context";
import styles from "./app.module.css";

export function App() {
  const [currentRest, setCurrentRest] = useState(
    restaurants.length ? restaurants[0] : null
  );

  function changeRest(id) {
    const rest = restaurants.find((restaurant) => restaurant.id === id);
    setCurrentRest(rest);
  }

  return (
    <ThemeContextProvider>
      <UserContextProvider>
        <div>
          <ScrollProgressBar />
          <Layout>
            <h2>Restaurants list</h2>
            <div className={styles.restaurantButtons}>
              {restaurants.map((restaurant) => (
                <CustomButton
                  style={styles.restaurantButton}
                  key={restaurant.id}
                  onClick={() => changeRest(restaurant.id)}>
                  {restaurant.name}
                </CustomButton>
              ))}
            </div>
            <Restaurant
              key={currentRest.id}
              rest={currentRest}
            />
          </Layout>
        </div>
      </UserContextProvider>
    </ThemeContextProvider>
  );
}