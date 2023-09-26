'use client'

import styles from "./CardSkill.module.scss";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { useContext, useEffect, useRef, useState } from "react";
import { Icon } from '@iconify/react';
import { animationSlideScrollToBottom } from "@animation/gsapAnimation";
import { useWindowSizeResize } from "@Hooks/Window/useWindowSizeResize"

interface CardSkill {
    inParagraphs: string[];
    inIcones: string[];
    inClassList: string;
}

const CardSkill = ({ inParagraphs, inIcones, inClassList }: CardSkill): JSX.Element => {

    const themeContext = useContext(ThemeContext)
    const isDarkMode = themeContext!.isDarkMode
    const { windowWidth } = useWindowSizeResize();

    const cardSkill = useRef<HTMLDivElement>(null)
    const paragraphs = useRef<HTMLParagraphElement>(null)

    const [showSkillDetails, setShowSkillDetails] = useState<boolean>(false)
    const [toggleShowSkillDetails, setTooggleShowSkillDetails] = useState<boolean>(false)
    const [rotateArrow, setRotateArrow] = useState<1 | 3>(1)

    // Application du dark/light mode
    useEffect(() => {
        if (document.getElementById(inClassList)) {
            const componentForCssChange = [
                {
                    htmlElement: document.getElementById(inClassList),
                    name: inClassList,
                    scss: styles
                },
            ]
            themeContext?.changeDarkLightMode(componentForCssChange)
        }
    }, [themeContext, isDarkMode, inClassList])

    // Gestion des états controlés par chaque évenements selon le format destinée à l'affichage des descriptions des compétences
    const addEventdependingOnTheMedia = () => {
        if (typeof window !== 'undefined' && cardSkill.current !== null) {
            cardSkill.current.addEventListener("mouseenter", () => {
                if (window.matchMedia("(min-width: 993px)").matches) {
                    setShowSkillDetails(true)
                }
            })
            cardSkill.current.addEventListener("mouseleave", () => {
                if (window.matchMedia("(min-width: 993px)").matches) {
                    setShowSkillDetails(false)
                }
            })
            cardSkill.current.addEventListener("click", () => {
                if (window.matchMedia("(max-width: 992px)").matches) {
                    setTooggleShowSkillDetails((current) => !current)
                }
            })
        }
    }

    useEffect(() => {
        if (typeof window !== 'undefined') {
            addEventdependingOnTheMedia()
        }
    }, []);


    const applyStyleAccordeon = (elem: boolean) => {
        if (elem) {
            setRotateArrow(1)
            cardSkill.current?.classList.add(styles.visible);
            paragraphs.current?.classList.add(styles.opacity)
        } else {
            setRotateArrow(3)
            cardSkill.current?.classList.remove(styles.visible);
            paragraphs.current?.classList.remove(styles.opacity)
        }
    }

    useEffect(() => {
        if (cardSkill.current !== null) {
            applyStyleAccordeon(toggleShowSkillDetails)
        }
    }, [toggleShowSkillDetails]);
    useEffect(() => {
        if (cardSkill.current !== null) {
            applyStyleAccordeon(showSkillDetails)
        }
    }, [showSkillDetails]);

    const closeSkillDetails = () => {
        setRotateArrow(3)
        cardSkill.current?.classList.remove(styles.visible);
        paragraphs.current?.classList.remove(styles.opacity)
    }

    useEffect(() => {
        closeSkillDetails()
    }, [windowWidth]);


    // Animation gsap
    useEffect(() => {
        animationSlideScrollToBottom(inClassList, 0.3, 0.5, 100)
    }, []);

    return (
        <div id={inClassList} ref={cardSkill} className={styles[inClassList]} >
            <div className={styles.container} >
                {
                    inIcones.map((icon, index) => (
                        <figure className={styles.container__icones} key={index}>
                            <Icon aria-label="icone technologie" icon={icon} className={styles.icone}></Icon>
                        </figure>
                    ))
                }
                <Icon className={styles["slideToBottom"]} icon="ic:round-arrow-left" rotate={rotateArrow} aria-label="Défilement vers le bas" />
            </div>
            <div ref={paragraphs} className={styles.paragraphs}>
                {inParagraphs.map((paragraph, index) => (
                    <p key={index}>{paragraph}</p>
                ))}
                <div className={styles.tilt} >
                    <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                        <path d="M1200 120L0 16.48 0 0 1200 0 1200 120z" className={styles["tilt-fill"]}></path>
                    </svg>
                </div>
            </div>
        </div>
    );
};

export default CardSkill;
// rotate={rotateArrow}
// className={[styles.paragraphs, toggleShowSkillDetails ? styles.active : ""].join(' ')}
// style={showSkillDetails || toggleShowSkillDetails ? { opacity: 1 } : { opacity: 0 }}