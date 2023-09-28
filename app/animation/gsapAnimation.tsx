import { gsap } from "gsap";
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ScrollToPlugin } from "gsap/ScrollToPlugin";


const typeOfElementDetect = (elem: HTMLElement | string) => {
    let typeOfElem: HTMLElement | null = null;

    if (elem !== null) {
        if (typeof elem === 'string') {
            typeOfElem = document.getElementById(elem)
        }
        if (elem instanceof HTMLElement) {
            typeOfElem = elem
        }
        return typeOfElem;
    }
}


export const animationSlideScrollToBottom = (elem: HTMLElement | string, delay: number, duration: number, yfrom: number, topScroll: number, bottomScroll: number) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    const typeOfElem = typeOfElementDetect(elem);


    if (typeOfElem !== null && typeOfElem !== undefined) {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                typeOfElem,
                {
                    opacity: 0,
                    y: -yfrom,
                },
                {
                    opacity: 1,
                    y: 0,
                    delay: delay,
                    duration: duration,
                    scrollTrigger: {
                        trigger: typeOfElem,
                        start: `top ${topScroll}%`,
                        end: `bottom ${bottomScroll}%`
                    },
                }
            )
        })
        return () => {
            ctx.revert();
        };
    }
}

export const animationSlideScrollToRight = (elem: HTMLElement | string, delay: number, duration: number, xfrom: number) => {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

    const typeOfElem = typeOfElementDetect(elem);

    if (typeOfElem !== null && typeOfElem !== undefined) {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                typeOfElem,
                {
                    opacity: 0,
                    x: -xfrom,
                },
                {
                    opacity: 1,
                    x: 0,
                    delay: delay,
                    duration: duration,
                    scrollTrigger: {
                        trigger: typeOfElem,
                        start: "top 25%",
                        end: "bottom 25%",
                    },
                }
            )
        })
        return () => {
            ctx.revert();
        };
    }
}


export const animationSlideToBottom = (elem: string | HTMLElement, delay: number, duration: number, yfrom: number) => {

    const typeOfElem = typeOfElementDetect(elem);

    if (typeOfElem !== null && typeOfElem !== undefined) {
        let ctx = gsap.context(() => {
            gsap.fromTo(
                typeOfElem,
                {
                    opacity: 0,
                    y: -yfrom,
                },
                {
                    opacity: 1,
                    y: 0,
                    delay: delay,
                    duration: duration,
                }
            )
        })
        return () => {
            ctx.revert();
        };
    }
}