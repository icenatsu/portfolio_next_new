'use client'

import styles from "./Skills.module.scss";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { useContext, useEffect, useRef } from "react";
import CardSkill from "@components/Skills/CardSkill/CardSkill";
import DownloadButton from '@components/DownloadButton/DownloadButton'
import { animationSlideScrollToRight, animationSlideScrollToBottom } from "@animation/gsapAnimation"

interface IntSkill {
    paragraphs: string[];
    icones: string[];
    classList: string;
}
interface SkillDetails {
    htmlCss: IntSkill,
    css: IntSkill,
    github: IntSkill,
    seo: IntSkill,
    javascript: IntSkill,
    nodejs: IntSkill,
    react: IntSkill,
    typescript: IntSkill,
}

const Skills = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);
    const container = useRef<HTMLDivElement>(null);
    const isDarkMode = themeContext!.isDarkMode;

    // Application du dark/light mode
    useEffect(() => {
        if (container.current !== null) {
            const componentForCssChange = [
                {
                    htmlElement: container.current,
                    name: 'container',
                    scss: styles
                },
            ]
            themeContext?.changeDarkLightMode(componentForCssChange)
        }
    }, [themeContext, isDarkMode])

    // Données des compétences
    const dataSkills: SkillDetails = {
        htmlCss: {
            paragraphs: [
                "Intégrer du contenu conformément à une maquette",
                "Implémenter une interface responsive"
            ],
            icones: [
                "icomoon-free:html-five",
                "uiw:css3"
            ],
            classList: "html-css"
        },

        css: {
            paragraphs: [
                "Mettre en œuvre des effets CSS graphiques avancés",
                "Assurer la cohérence graphique d'un site web",
                "Mettre en place une structure de navigation pour un site web",
                "Utilisation du préprocesseur Sass"
            ],
            icones: [
                "uiw:css3",
                "fa6-brands:sass"
            ],
            classList: "css"
        },
        github: {
            paragraphs: [
                "Utiliser un système de gestion de versions pour le suivi du projet et son hébergement",
            ],
            icones: [
                "uil:github"
            ],
            classList: "github"
        },
        seo: {
            paragraphs: [
                "Assurer l'accessibilité d'un site web",
                "Optimiser la taille et la vitesse d’un site web",
                "Optimiser le référencement d'un site web"
            ],
            icones: [
                "icon-park-outline:seo"
            ],
            classList: "seo"
        },
        javascript: {
            paragraphs: [
                "Créer un plan de test pour une application",
                "Valider des données issues de sources externes",
                "Interagir avec un web service avec JavaScript",
                "Gérer des événements JavaScript"
            ],
            icones: [
                "akar-icons:javascript-fill"
            ],
            classList: "javascript"
        },
        nodejs: {
            paragraphs: [
                "Mettre en œuvre des opérations CRUD de manière sécurisée",
                "Implémenter un modèle logique de données conformément à la réglementation",
                "Stocker des données de manière sécurisée",
                "Authentifier un utilisateur et maintenir sa session",
                "Implémenter un stockage de données sécurisé en utilisant une base de données noSQL"
            ],
            icones: [
                "mdi:nodejs",
                "bxl:mongodb"
            ],
            classList: "nodejs"
        },
        react: {
            paragraphs: [
                "Initialiser une application",
                "Configurer la navigation entre les pages de l'application avec React Router",
                "Développer des éléments de l'interface d'un site web grâce à des composants React",
            ],
            icones: [
                "akar-icons:react-fill",
                "teenyicons:nextjs-outline"
            ],
            classList: "react"
        },
        typescript: {
            paragraphs: [
                "Arborer un typage statique pour détecter et prévenir les erreurs de type",
                "Améliorer la robustesse et la maintenabilité du code JavaScript",
            ],
            icones: [
                "akar-icons:typescript-fill"
            ],
            classList: "typescript"
        }
    }

    // Séparation des données en deux block d'accordeon
    let dataFirstBlockAccordeon = [];
    const dataSecondBlockAccordeon = [];

    for (let index = 0; index < Object.entries(dataSkills).length; index++) {
        if (index < Object.entries(dataSkills).length / 2) {
            dataFirstBlockAccordeon.push(Object.entries(dataSkills)[index])
        } else {
            dataSecondBlockAccordeon.push(Object.entries(dataSkills)[index])
        }

    }

    // Animations gsap
    useEffect(() => {
        animationSlideScrollToBottom("skills", 0.6, 0.5, 0)
    }, []);

    useEffect(() => {
        animationSlideScrollToRight("skillsTitle", 0.6, 0.5, 0)
    }, []);


    return (
        <section id="skills" className={styles.container} ref={container} >
            <h2 id="skillsTitle" className={styles.title}>
                Mes compétences
            </h2>
            <DownloadButton />
            <div className={styles["container__Accordeons"]}>
                <div className={styles.dataAccordeon}>
                    {dataFirstBlockAccordeon.map(([key, value]) => {
                        return (
                            <CardSkill
                                key={key}
                                inParagraphs={value.paragraphs}
                                inIcones={value.icones}
                                inClassList={value.classList}
                            />
                        )
                    })}
                </div>
                <div className={styles.dataAccordeon}>
                    {dataSecondBlockAccordeon.map(([key, value]) => {
                        return (
                            <CardSkill
                                key={key}
                                inParagraphs={value.paragraphs}
                                inIcones={value.icones}
                                inClassList={value.classList}
                            />
                        )
                    })}
                </div>
            </div>
        </section>
    );

}

export default Skills;

{/* <div className={styles.wave}>
                <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                    <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z" className={styles["shape-fill"]}></path>
                </svg>
            </div> */}