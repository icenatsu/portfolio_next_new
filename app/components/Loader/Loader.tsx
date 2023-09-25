'use client'

import styles from "./Loader.module.scss"
import { Icon } from '@iconify/react';
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { useContext, useEffect, useRef, useState } from "react";

const Loader = (): JSX.Element => {

    const themeContext = useContext(ThemeContext);
    const isDarkMode = themeContext!.isDarkMode;
    const loader = useRef<HTMLDivElement>(null)

    // Application du light/dark mode
    useEffect(() => {
        if (loader.current !== null) {
            const componentForCssChange = [
                {
                    htmlElement: loader.current,
                    name: 'loader',
                    scss: styles
                },
            ]
            themeContext?.changeDarkLightMode(componentForCssChange)
        }
    }, [themeContext, isDarkMode])

    return (
        <div ref={loader} id='loader' className={styles.loader}>
            <Icon className={styles.icon} icon="eos-icons:bubble-loading" />
        </div>
    );
};

export default Loader;
