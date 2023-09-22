import styles from "./CardProject.module.scss"
import { Icon } from '@iconify/react';
import Image from 'next/image';
import Link from "next/link";

interface IntData {
    id: number,
    title: string,
    description: string,
    cover: { [key: string]: string },
    technologies: { [key: string]: string },
    site: string,
    code: string
    [propName: string]: any,
}

interface CardProjectProps {
    inData: IntData,
    inId: string,
}

const CardProject = ({ inData }: CardProjectProps): JSX.Element => {
    return (
        <article className={styles["flip-card"]}>
            <div className={styles["flip-card-inner"]}>
                <div className={styles["flip-card-front"]}>
                    <picture className={styles["flip-card-front__image"]}>
                        <source media={`(max-width: 768px)`} srcSet={inData.cover.mobile} />
                        <source media={`(min-width: 769px)`} srcSet={inData.cover.tablette} />
                        {/* <source media={`(min-width: 992px)`} srcSet={inData.cover.desktop} width="330px" /> */}
                        <Image src={inData.cover.desktop} alt={inData.title} layout="fill" objectFit='cover'
                        />
                    </picture>
                    <Icon className={styles["go-back"]} icon="pepicons-pop:arrow-spin" rotate={2} />
                </div>
                {/* <div>
                </div> */}
                <div className={styles["flip-card-back"]}>
                    <div className={styles["flip-card-back__sourcesAndTitle"]}>
                        <h2 className={styles["flip-card-back__sourcesAndTitle__title"]}>{inData.title}</h2>
                        <div className={styles["flip-card-back__sourcesAndTitle__sources"]}>
                            <Link href={inData.code} aria-label={`Voir le code de ${inData.title}`}><Icon icon={"uil:github"} /></Link>
                            {inData.site !== undefined && <Link href={inData.site} aria-label={`Voir le site de ${inData.title}`}><Icon icon={"bi:box-arrow-up-right"} /></Link>}
                        </div>
                    </div>
                    <p className={styles["flip-card-back__description"]}>{inData.description}</p>
                    <div className={styles["flip-card-back__technologies"]}>
                        {Object.entries(inData.technologies).map((techno, idx: number) => {
                            return (
                                <div className={styles.technologies} key={idx}>
                                    <figure className={styles.technologies__icones}>
                                        <Icon className={styles[techno[0].toLocaleLowerCase()]} icon={techno[1]} aria-label={`icone ${techno[0]}`} />
                                    </figure>
                                </div>
                            )
                        })}
                    </div>
                    <div className={styles.curve}>
                        <svg data-name="Layer 1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none">
                            <path d="M0,0V7.23C0,65.52,268.63,112.77,600,112.77S1200,65.52,1200,7.23V0Z" className={styles["shape-fill"]}></path>
                        </svg>
                    </div>
                </div>
            </div>
        </article>
    )
};

export default CardProject;