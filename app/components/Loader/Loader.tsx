"use client";

import styles from "./Loader.module.scss";
import { Icon } from "@iconify/react";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { useContext, useEffect } from "react";

const Loader = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext!.isDarkMode;

  // Application du light/dark mode
  useEffect(() => {
    if (document.getElementById("loader") !== null) {
      const componentForCssChange = [
        {
          htmlElement: document.getElementById("loader"),
          name: "loader",
          scss: styles,
        },
      ];
      themeContext?.changeDarkLightMode(componentForCssChange);
    }
  }, [themeContext, isDarkMode]);

  return (
    <div id="loader" className={styles.loader}>
      <Icon className={styles.icon} icon="eos-icons:bubble-loading" />
    </div>
  );
};

export default Loader;
