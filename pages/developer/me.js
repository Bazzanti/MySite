import styles from '/styles/me.module.scss'
import Image from 'next/image'
import mypic from '/public/profilee.jpg'

export default function Me() {

    return (
    <div className={styles.row}>
        <div className={styles.column}>
        <h4 className={styles.smallTitle}>
            Hi, my name is
        </h4>

        <div className={styles.wrappedAnimationText }>
            <span data-content="Michael Bazzanti" aria-hidden="true" className={styles.animationText }>
            </span>
            Michael Bazzanti
        </div>

        <h4 className={styles.smallTitle}>
            and I am a 
        </h4>

        <div className={styles.wrappedAnimationText }>
            <span data-content="Software Developer" aria-hidden="true" className={styles.animationText }>
            </span>
            Software Developer
        </div>

        <p className={styles.description}>
            I love discovering new {' '} 
            <code className={styles.code}>technologies</code> and build fantastic {' '} 
            <code className={styles.code}>digital</code> experiences.
        </p>
        </div>
        <div className={styles.column + ' ' + styles.center}>
        <div className={styles.image}>
            <Image
            src={mypic}
            alt="Picture of the author"
            layout="responsive" 
            objectFit="cover" 
            placeholder="blur" 
            />
        </div>
        </div>
    </div>
    );
}