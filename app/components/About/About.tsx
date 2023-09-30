"use client";

import styles from "./About.module.scss";
import { useContext, useEffect } from "react";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import {
  animationSlideScrollToRight,
  animationSlideScrollToBottom,
} from "@animation/gsapAnimation";

const About = (): JSX.Element => {
  const themeContext = useContext(ThemeContext);
  const isDarkMode = themeContext!.isDarkMode;

  // Gestion du Dark/Light mode
  useEffect(() => {
    if (document.getElementById("about") !== null) {
      const componentForCssChange = [
        {
          htmlElement: document.getElementById("about"),
          name: "container",
          scss: styles,
        },
      ];
      themeContext?.changeDarkLightMode(componentForCssChange);
    }
  }, [themeContext, isDarkMode]);

  // Animations gsap
  // animationSlideScrollToBottom(delay, durée, yfrom, topscroll, bottom scroll)
  useEffect(() => {
    animationSlideScrollToBottom("about", 0, 0.1, 20, 85, 40);
  }, []);

  useEffect(() => {
    animationSlideScrollToBottom("aboutTitle", 0.1, 0.2, 0, 75, 25);
  }, []);

  useEffect(() => {
    animationSlideScrollToBottom("aboutDescription", 0.2, 0.3, 0, 75, 25);
  }, []);

  return (
    <section id="about" className={styles.container}>
      <h2 id="aboutTitle" className={styles.about}>
        A propos de moi
      </h2>
      <div id="aboutDescription" className={styles.presentation}>
        <p>
          Je me nomme Gaëlle et suis passionnée par la création de sites web et
          de nouvelles technologies.
          <br />
          <br />
          Vous trouverez ici les projets que j&apos;ai pu mener autant lors de
          ma formation qu&apos;à titre personnel ainsi que les compétences que
          j&apos;ai pu acquérir au fil du temps.
          <br />
          J&apos;éprouve un réel plaisir à apprendre de nouveaux langages de
          programmation.
          <br />
          <br />
          Ces derniers étant en constante évolution, je pratique une veille
          technologique à la fois pour rester à la page, mais aussi pour
          approfondir mes connaissances.
          <br />
          <br />
          Si vous êtes intéressés par mon travail, n&apos;hésitez pas à me
          contacter !
        </p>
      </div>
    </section>
  );
};

export default About;
