import styles from "./Banner.module.scss"
import BannerBg from "@public/img/banner_bg.webp";
import jarre from "@public/img/jarre.svg"
import Logo from "@public/img/logo.svg"
import Image from 'next/image';

const Banner = (): JSX.Element => {

    return (
        <div className={styles.banner}>
            <div className={styles.logo}><Image className={styles.logoImg} src={Logo} alt="Dessin d'une cruche inclinée" /></div>
            <div className={styles.rain} >
                <Image className={styles.bannerbg} src={BannerBg} alt='Image animée de code' priority={true} />
            </div>
            <div className={styles.pot}>
                <Image className={styles.PotImg} src={jarre} alt="Dessin d'une jarre" />
            </div>
        </div>
    );
};

export default Banner;