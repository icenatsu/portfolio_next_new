"use client";
import styles from "./NavBar.module.scss";
import Link from "next/link";
import { useContext, useEffect, useRef, useState } from "react";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { Icon } from "@iconify/react";
import { useWindowSizeResize } from "@Hooks/Window/useWindowSizeResize";
import Switch from "../Switch/Switch";

const NavBar = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext!.isDarkMode;
  const windowSize = useWindowSizeResize();

  const [showMenu, setShowMenu] = useState<boolean>(false);

  const container = useRef<HTMLElement>(null);
  const list = useRef<HTMLUListElement>(null);

  // Application du dark/light mode
  useEffect(() => {
    if (document.getElementById("navBar") !== null) {
      const componentForCssChange = [
        {
          htmlElement: document.getElementById("navBar"),
          name: "container",
          scss: styles,
        },
      ];
      themeContext?.changeDarkLightMode(componentForCssChange);
    }
  }, [themeContext, isDarkMode]);

  // Déroulement de la navbar en version mobile et tablette
  const handleClick = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (
      container.current !== null &&
      list.current !== null &&
      typeof window !== "undefined"
    ) {
      if (showMenu) {
        container.current.style.minHeight = "210px";
        list.current.style.transition = "opacity 1s 0.8s";
        list.current.style.opacity = "1";
      } else {
        list.current.style.transition = "none";
        container.current.style.minHeight = "60px";
        list.current.style.opacity = "0";
      }
    }
  }, [showMenu]);

  useEffect(() => {
    setShowMenu(false);
    if (list.current !== null) {
      if (windowSize.windowWidth > 992) {
        list.current.style.opacity = "1";
      } else {
        list.current.style.opacity = "0";
      }
    }
  }, [windowSize.windowWidth]);

  const scrollToAnchor = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
    setShowMenu(false);
  };

  return (
    <nav id="navBar" className={styles.container} ref={container}>
      <Switch />
      <ul className={styles.list} ref={list}>
        <li className={styles.list__item}>
          <Link
            onClick={() => scrollToAnchor("projets")}
            scroll={false}
            href="/#projets"
          >
            Projets
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link
            onClick={() => scrollToAnchor("skills")}
            href="/#skills"
            scroll={false}
          >
            Compétences
          </Link>
        </li>
        <li className={styles.list__item}>
          <Link
            onClick={() => scrollToAnchor("contact")}
            href="/#contact"
            scroll={false}
          >
            Contact
          </Link>
        </li>
      </ul>
      <div className={styles.burger} onClick={handleClick}>
        <Icon
          aria-label="Afficher le menu"
          icon="icon-park-outline:hamburger-button"
          hFlip={true}
        />
      </div>
    </nav>
  );
};

export default NavBar;
