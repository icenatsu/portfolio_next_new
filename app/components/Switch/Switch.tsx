import styles from "./Switch.module.scss";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { Icon } from "@iconify/react";

const Switch = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext!.isDarkMode;

  useEffect(() => {
    if (document.getElementById("sunmoon") !== null) {
      const componentForCssChange = [
        {
          htmlElement: document.getElementById("sunmoon"),
          name: "sunmoon",
          scss: styles,
        },
      ];
      themeContext?.changeDarkLightMode(componentForCssChange);
    }
  }, [themeContext, isDarkMode]);

  return (
    <label className={styles.switch} htmlFor="switch">
      <input
        className={styles.input}
        type="checkbox"
        checked={!themeContext?.isDarkMode}
        onChange={themeContext?.switchTheme}
        id="switch"
        name="switch"
        aria-label="switch theme"
      />
      <span id="sunmoon" className={styles.sunmoon}>
        <Icon icon="radix-icons:moon" aria-label="Mode sombre" hFlip={true} />
        <Icon icon="humbleicons:sun" aria-label="Mode clair" />
      </span>
    </label>
  );
};

export default Switch;
