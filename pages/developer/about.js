import styles from '/styles/about.module.scss'

export default function About() {

    return (
        <div>
            <div>
                <span className={styles.titleSection}>About</span>
            </div>
            <div className={styles.descriptionDivSection}>
                <span className={styles.description}>
                    I&apos;m a Software Developer graduated in Mathematics; I&apos;m passionate about programming and I love 
                    creating innovative solutions. <br></br>
                    Well-versed in .NET and Angular, but I also have experiences in many
                    more technologies and frameworks because I&apos;m always looking for new challenges and 
                    opportunities to learn and grow. <br></br>
                    I am confident in my problem-solving abilities to overcome problems with creative solutions 
                    that are strategically designed to last long-term. 
                </span>
            </div>
        </div>
    );
}