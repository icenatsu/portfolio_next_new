'use client'

import { useSwiper } from "swiper/react"
import styles from "./SwipperNavButtons.module.scss"
import { Icon } from '@iconify/react';
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { useContext, useEffect, useRef } from "react";



export const NextArrow = (): JSX.Element => {
    const swiper = useSwiper();

    const themeContext = useContext(ThemeContext);
    const isDarkMode = themeContext!.isDarkMode;
    const next = useRef<HTMLDivElement>(null)

    // Application du light/dark mode
    useEffect(() => {
        if (next.current !== null) {
            const componentForCssChange = [
                {
                    htmlElement: next.current,
                    name: 'arrow',
                    scss: styles
                },
            ]
            themeContext?.changeDarkLightMode(componentForCssChange)
        }
    }, [themeContext, isDarkMode])



    const handleNextClick = () => {
        swiper.slideNext();
    };

    return (
        <div ref={next} className={[styles["arrow"], styles["next"]].join(' ')} onClick={handleNextClick}>
            <Icon icon="solar:map-arrow-left-bold-duotone" rotate={2} aria-label="suivant" />
        </div>
    );
}

export const PrevArrow = (): JSX.Element => {
    const swiper = useSwiper();

    const themeContext = useContext(ThemeContext);
    const isDarkMode = themeContext!.isDarkMode;
    const prev = useRef<HTMLDivElement>(null)

    // Application du light/dark mode
    useEffect(() => {
        if (prev.current !== null) {
            const componentForCssChange = [
                {
                    htmlElement: prev.current,
                    name: 'arrow',
                    scss: styles
                },
            ]
            themeContext?.changeDarkLightMode(componentForCssChange)
        }
    }, [themeContext, isDarkMode])


    const handlePrevClick = () => {
        swiper.slidePrev();
    };

    return (
        <div ref={prev} className={[styles["arrow"], styles["prev"]].join(' ')} onClick={handlePrevClick}>
            <Icon icon="solar:map-arrow-left-bold-duotone" aria-label="précédent" />
        </div>
    );
}