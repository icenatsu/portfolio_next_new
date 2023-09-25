'use client'

import styles from "./Project.module.scss"
import { ThemeContext } from "@context/ThemeContext/ThemeContext";
import { useContext, useEffect, useRef, useState } from "react";
import { useFetch } from "@Hooks/Fetch/useFetch";
import Loader from "@components/Loader/Loader"
import CardProject from "@/app/components/Projets/CardProject/CardProject";
import { Icon } from '@iconify/react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Scrollbar, A11y, EffectCoverflow } from 'swiper/modules';
import 'swiper/scss';
import 'swiper/scss/navigation';
import 'swiper/scss/pagination';
import { NextArrow, PrevArrow } from "@components/SwipperNavButtons/SwipperNavButtons";
import { animationSlideScrollToRight, animationSlideScrollToBottom } from "@animation/gsapAnimation"
import { useWindowSizeResize } from "@Hooks/Window/useWindowSizeResize"

interface IntItems {
    id: number,
    title: string,
    description: string,
    cover: { [key: string]: string },
    technologies: { [key: string]: string },
    site: string,
    code: string
}

const Project = () => {

    const themeContext = useContext(ThemeContext);
    const isDarkMode = themeContext!.isDarkMode;
    const { windowWidth } = useWindowSizeResize();

    const { items, error } = useFetch<IntItems[]>();

    const project = useRef<HTMLDivElement>(null);
    const caroussel = useRef<HTMLDivElement>(null);
    const errors = useRef<HTMLDivElement>(null);

    // Application du light/dark mode
    useEffect(() => {
        if (project.current !== null && caroussel.current !== null || errors !== null) {
            const componentForCssChange = [
                {
                    htmlElement: project.current,
                    name: 'projects',
                    scss: styles
                },
                {
                    htmlElement: caroussel.current,
                    name: 'projects__caroussel',
                    scss: styles
                },
                {
                    htmlElement: errors.current,
                    name: 'error',
                    scss: styles
                },
            ]
            themeContext?.changeDarkLightMode(componentForCssChange)
        }
    }, [themeContext, isDarkMode])


    //Animations gsap
    useEffect(() => {
        animationSlideScrollToRight("projetTitle", 0.4, 0.5, 100)
    }, []);

    useEffect(() => {
        animationSlideScrollToBottom("caroussel", 0.5, 0.5, 100)
    }, []);

    useEffect(() => {
        animationSlideScrollToBottom("projets", 0.5, 0.5, 0)
    }, []);


    if (error !== undefined) {
        return (
            <div ref={errors} className={styles["error"]}>
                <p>Une erreur est survenue. Veuillez réessayer ultérieurement.</p>
            </div>
        )
    }


    return (
        <section id="projets" className={styles.projects} ref={project}>
            <h2 id="projetTitle" className={styles["projects__title"]}> Mes projets</h2>
            <div id="caroussel" className={styles["projects__caroussel"]} ref={caroussel}>
                <Swiper
                    onResize={(swiper) => swiper.slideTo(1)}
                    modules={[Navigation, Pagination, EffectCoverflow, Scrollbar]}
                    scrollbar={{ draggable: true }}
                    className={styles.swiper}
                    spaceBetween={2}
                    slidesPerView={1}
                    centeredSlides={true}
                    effect={"coverflow"}
                    coverflowEffect={{
                        rotate: 50,
                        stretch: 0,
                        depth: 50,
                        modifier: 1,
                        slideShadows: false,
                    }}

                    breakpoints={{
                        768: {
                            slidesPerView: 2,
                            spaceBetween: 0,
                            centeredSlides: false,
                        },
                        992: {
                            slidesPerView: 3,
                            spaceBetween: 10,
                            centeredSlides: true,
                        },
                    }}
                    pagination={false}
                    loop={true}
                >
                    {items ? (
                        items.map((item: IntItems, index: number) => (
                            <SwiperSlide className={styles["swiper__slide"]} key={index}>
                                {({ isActive }) => (
                                    <CardProject
                                        inId={item.title}
                                        inData={item}
                                        inStyleSlider={isActive ? 'grayscale(0%)' : 'grayscale(100%)'}
                                    />
                                )}

                            </SwiperSlide>
                        ))
                    ) : (
                        <Loader />
                    )}
                    <PrevArrow />
                    <NextArrow />
                </Swiper>
            </div>
            <div className={styles["touch"]}>
                <Icon icon="icon-park-solid:move" aria-label="touch" />
            </div>
        </section>
    )

};

export default Project;
