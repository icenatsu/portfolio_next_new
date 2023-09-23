'use client'

import styles from "./About.module.scss"
import { useEffect } from "react";
import { animationSlideScrollToRight, animationSlideScrollToBottom } from "@animation/gsapAnimation"


const About = (): JSX.Element => {

    // Animations gsap
    useEffect(() => {
        animationSlideScrollToBottom("about", 0.5, 0.5, 0)
    }, []);

    useEffect(() => {
        animationSlideScrollToRight("aboutTitle", 0.5, 0.5, 100)
    }, []);

    useEffect(() => {
        animationSlideScrollToBottom("aboutDescription", 0.5, 0.5, 0)
    }, []);


    return (
        <section id="about" className={styles.container}>
            <h2 id="aboutTitle" className={styles.about}>A propos de moi</h2>
            <div id='aboutDescription' className={styles.presentation}>
                <p>Bonjour,</p>
                <p>
                    Je me nomme Gaëlle et suis passionnée par la création de sites web et de nouvelles technologies.<br /><br />
                    Vous trouverez ici les projets que j&apos;ai pu mener autant lors de ma formation qu&apos;à titre personnel ainsi que les compétences que j&apos;ai pu acquérir au fil du temps.<br />
                    J&apos;éprouve un réel plaisir à apprendre de nouveaux langages de programmation.<br /><br />
                    Ces derniers étant en constante évolution, je pratique une veille technologique à la fois pour rester à la page, mais aussi pour approfondir mes connaissances.<br /><br />
                    Si vous êtes intéressés par mon travail, n&apos;hésitez pas à me contacter !
                </p>
            </div>
        </section>
    );
};

export default About;