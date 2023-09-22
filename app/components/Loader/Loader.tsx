import styles from "./Loader.module.scss"

const Loader = (): JSX.Element => {

    return (
        <div id='loader' className={styles.loader}>
            <div className={styles.firstanim}>
                <div className={styles.anim}>
                    <span className={styles.number}>0110</span>
                    <span className={styles.number}>L</span>
                    <span className={styles.number}>1100</span>
                </div>
                <div className={styles.anim}>
                    <span className={styles.number}>0110</span>
                    <span className={styles.number}>O</span>
                    <span className={styles.number}>1111</span>
                </div>
                <div className={styles.anim}>
                    <span className={styles.number}>0110</span>
                    <span className={styles.number}>A</span>
                    <span className={styles.number}>0001</span>
                </div>
                <div className={styles.anim}>
                    <span className={styles.number}>0110</span>
                    <span className={styles.number}>D</span>
                    <span className={styles.number}>0100</span>
                </div>
                <div className={styles.anim}>
                    <span className={styles.number}>0110</span>
                    <span className={styles.number}>I</span>
                    <span className={styles.number}>1001</span>
                </div>
                <div className={styles.anim}>
                    <span className={styles.number}>0110</span>
                    <span className={styles.number}>N</span>
                    <span className={styles.number}>1001</span>
                </div>
                <div className={styles.anim}>
                    <span className={styles.number}>0110</span>
                    <span className={styles.number}>G</span>
                    <span className={styles.number}>0111</span>
                </div>
            </div>

            <div className={styles.secondanim}>
                <span className={styles.number}>010101010100101001</span>
                <span className={styles.number}>100101000100101000</span>
                <span className={styles.number}>000010101001000100</span>
                <span className={styles.number}>010101010100101001</span>
                <span className={styles.number}>100101000100101000</span>
                <span className={styles.number}>000010101001000100</span>
                <span className={styles.number}>010101010100101001</span>
                <span className={styles.number}>100101000100101000</span>
                <span className={styles.number}>000010101001000100</span>
            </div>

        </div>
    );
};

export default Loader;
