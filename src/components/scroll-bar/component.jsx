import { useEffect, useState } from "react";

const scrolling = () => {
  return (
    Math.floor(
      (window.scrollY /
        (document.documentElement.scrollHeight - window.innerHeight)) * 100) + "%"
  );
};

export const ScrollBar = () => {
  const [percent, setPercent] = useState("0%");

  useEffect(() => {
    window.addEventListener("scroll", () => setPercent(scrolling));

    return window.removeEventListener("scroll", () =>
      setPercent(scrolling)
    );
  }, []);

  return (
    <>
      <div id="ScrollBar" style={{ width: percent }}></div>
    </>
  );
};