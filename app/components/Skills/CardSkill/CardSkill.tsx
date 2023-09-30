"use client";

import styles from "./CardSkill.module.scss";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { useContext, useEffect, useRef, useState } from "react";
import { Icon } from "@iconify/react";
import { animationSlideScrollToBottom } from "@animation/gsapAnimation";
import { useWindowSizeResize } from "@Hooks/Window/useWindowSizeResize";

interface CardSkill {
  inParagraphs: string[];
  inIcones: { [key: string]: string };
  inClassList: string;
}

const CardSkill = ({
  inParagraphs,
  inIcones,
  inClassList,
}: CardSkill): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext!.isDarkMode;
  console.log(Object.entries(inIcones));

  // Application du dark/light mode
  useEffect(() => {
    if (document.getElementById(inClassList)) {
      const componentForCssChange = [
        {
          htmlElement: document.getElementById(inClassList),
          name: inClassList,
          scss: styles,
        },
      ];
      themeContext?.changeDarkLightMode(componentForCssChange);
    }
  }, [themeContext, isDarkMode, inClassList]);

  // Animation gsap
  useEffect(() => {
    animationSlideScrollToBottom(inClassList, 0.3, 0.5, 100, 75, 20);
  }, []);

  return (
    <div id={inClassList} className={styles[inClassList]}>
      <div className={styles.container}>
        {Object.entries(inIcones).map(([key, value], index) => (
          <figure className={styles["container__icones"]} key={index}>
            <Icon
              aria-label="icone technologie"
              icon={value}
              className={styles.icone}
            ></Icon>
            <span className={styles.nameTechno}>{key}</span>
          </figure>
        ))}
        <Icon
          className={styles["slideToBottom"]}
          icon="ic:round-arrow-left"
          rotate={3}
          aria-label="Défilement vers le bas"
        />
      </div>
      <div className={styles["descriptionTechno"]}>
        {inParagraphs.map((paragraph, index) => (
          <p key={index}>{paragraph}</p>
        ))}
        <div className={styles.tilt}>
          <svg
            data-name="Layer 1"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1200 120"
            preserveAspectRatio="none"
          >
            <path
              d="M1200 120L0 16.48 0 0 1200 0 1200 120z"
              className={styles["tilt-fill"]}
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default CardSkill;
