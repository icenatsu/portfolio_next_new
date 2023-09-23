'use client'
import styles from "./Header.module.scss"
import { useContext, useEffect, useRef } from "react";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { Icon } from '@iconify/react';
import Banner from "@components/Banner/Banner"
import Shape from "@components/Shape/Shape"
import Link from "next/link";
import { animationSlideToBottom } from "@animation/gsapAnimation"

const Header = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);
    const isDarkMode = themeContext!.isDarkMode;

    useEffect(() => {
        if (document.getElementById("header") !== null) {
            const componentForCssChange = [
                {
                    htmlElement: document.getElementById("header"),
                    name: 'header',
                    scss: styles
                },
            ]
            themeContext?.changeDarkLightMode(componentForCssChange)
        }
    }, [themeContext, isDarkMode])

    const scrollToAnchor = () => {
        const projets = document.getElementById("projets")
        projets?.scrollIntoView({ behavior: "smooth" })
    }

    // Animations gsap
    /******************/

    useEffect(() => {
        animationSlideToBottom("header", 0.4, 0.6, 100)
    }, []);

    useEffect(() => {
        animationSlideToBottom("headerProfession", 0.4, 0.6, 40)
    }, []);

    useEffect(() => {
        animationSlideToBottom("headerTitle", 0.5, 0.6, 20)
    }, []);

    useEffect(() => {
        animationSlideToBottom("headerLink", 0.6, 0.6, 20)
    }, []);

    return (
        <header id="header" className={styles.header}>
            <Banner />
            <div className={styles["text"]}>
                <p id="headerProfession" className={styles.profession}>Développeuse Web</p>
                <h1 id="headerTitle" className={styles.title}>Gaëlle Blanchard</h1>
                <div id="headerLink" className={styles.link}>
                    <button className={styles.button}><Link onClick={scrollToAnchor} href="/#projets" scroll={false}>Voir projets</Link></button>
                    <button className={styles.button}><Icon className={styles.icon} icon={"bi:linkedin"}></Icon><Link href="https://www.linkedin.com/in/icenatsu/">Linkedin</Link></button>
                    <button className={styles.button}><Icon className={styles.icon} icon={"uil:github"}></Icon><Link href="https://github.com/icenatsu">Github</Link></button>
                </div>
                <Shape />
            </div>
        </header >

    );
};

export default Header;


