import styles from "./Banner.module.scss";
import BannerBg from "@public/img/banner_bg.webp";
import jarre from "@public/img/jarre.svg";
import Logo from "@public/img/logo.svg";
import Image from "next/image";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { useEffect } from "react";
import { useContext } from "react";

const Banner = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext!.isDarkMode;

  useEffect(() => {
    if (document.getElementById("banner") !== null) {
      const componentForCssChange = [
        {
          htmlElement: document.getElementById("banner"),
          name: "banner",
          scss: styles,
        },
      ];
      themeContext?.changeDarkLightMode(componentForCssChange);
    }
  }, [themeContext, isDarkMode]);

  return (
    <div id="banner" className={styles.banner}>
      <div className={styles.logo}>
        <Image
          className={styles.logoImg}
          src={Logo}
          alt="Dessin d'une cruche inclinée"
        />
      </div>
      <div className={styles.rain}>
        <Image
          className={styles.bannerbg}
          src={BannerBg}
          alt="Image animée de code"
          width={80}
          height={80}
        />
      </div>
      <div className={styles.pot}>
        <Image className={styles.PotImg} src={jarre} alt="Dessin d'une jarre" />
      </div>
    </div>
  );
};

export default Banner;
