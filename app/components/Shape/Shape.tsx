'use client'
import styles from "./Shape.module.scss";
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { useContext, useEffect } from "react";

const Shape = () => {

    const themeContext = useContext(ThemeContext);
    const isDarkMode = themeContext!.isDarkMode;

    useEffect(() => {
        if (document.getElementById("bubble") !== null) {
            const componentForCssChange = [
                {
                    htmlElement: document.getElementById("bubble"),
                    name: 'bubble',
                    scss: styles
                },
            ]
            themeContext?.changeDarkLightMode(componentForCssChange)
        }
    }, [themeContext, isDarkMode])

    return (
        <div id="bubble" className={styles.bubble}>
            <svg
                id="visual"
                className={styles["blob-motion"]}
                viewBox="0 0 1000 800"
                width="1000"
                height="800"
                xmlns="http://www.w3.org/2000/svg"
                xmlnsXlink="http://www.w3.org/1999/xlink"
                version="1.1"
            >
                <g transform="translate(534.0837320091089 379.1070584716284)">
                    <path
                        id="blob1"
                        d="M157.6 -251.3C195.5 -220.8 211.4 -162.3 223.9 -109.7C236.4 -57 245.4 -10.2 246.5 40.9C247.7 92.1 241 147.5 213.9 193.6C186.8 239.6 139.3 276.2 83.7 299C28 321.7 -35.9 330.7 -97 318.3C-158.2 305.9 -216.6 272.1 -241.6 221.5C-266.5 170.9 -258 103.4 -272.8 35.9C-287.6 -31.5 -325.7 -98.8 -311.8 -147.8C-297.9 -196.9 -231.9 -227.6 -171.3 -247.7C-110.7 -267.8 -55.3 -277.4 2.3 -280.9C59.8 -284.4 119.7 -281.9 157.6 -251.3"
                    ></path>
                </g>
            </svg>
        </div>
    );
};

export default Shape;

