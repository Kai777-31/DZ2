import { useEffect, useState } from "react";
import styles from "./scroll-progress-bar.module.css";

export function ScrollProgressBar() {
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const windowHeight = window.innerHeight;
      const documentHeight = document.documentElement.scrollHeight;
      const scrollY = window.scrollY;

      const percent = (scrollY / (documentHeight - windowHeight)) * 100;

      setScrollPercent(percent);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div
      className={styles.progressBar}
      style={{
        width: `${scrollPercent}%`,
      }}
    />
  );
}