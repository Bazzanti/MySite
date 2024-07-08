import Head from 'next/head'
import Particles from 'react-tsparticles'
import styles from '../styles/wedding.module.scss'

export default function Wedding() {
    
  
    return (
        
        <div className={styles.container}>
            <Head>
                <title>Wedding</title>
                <meta name="description" content="Wedding" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <div className={styles.divtitle}>
                <span className={styles.subtitle}>
                    {/* You're invited to the wedding of */}
                    SAVE THE DATE
                </span>

                <div className={styles.divmaintitle}>
                    <span className={styles.maintitle}>
                        Zoey Wilson
                    </span>

                    <span className={styles.maintitle}>
                        +
                    </span>

                    <span className={styles.maintitle}>
                        Michael Bazzanti
                    </span>
                </div>

                <span className={styles.subtitle}>
                    AUG | 6 | 2022 - 18:00
                </span>

                <span className={styles.subtitle}>
                    Cortona, Italy
                </span>

            </div>

            <Particles
                options={{
                    fullScreen: {
                        enable: true,
                        zIndex: 1
                      },
                                    fpsLimit: 60,
                interactivity: {
                    detectsOn: "canvas",
                    events: {
                    onClick: { enable: true, mode: "repulse" },
                    onHover: {
                        enable: true,
                        mode: "bubble",
                        parallax: { enable: false, force: 2, smooth: 10 }
                    },
                    resize: true
                    },
                    modes: {
                    bubble: {
                        distance: 400,
                        duration: 0.3,
                        opacity: 1,
                        size: 3,
                    },
                    grab: { distance: 400, line_linked: { opacity: 0.5 } },
                    push: { particles_nb: 4 },
                    remove: { particles_nb: 2 },
                    repulse: { distance: 200, duration: 0.4 }
                    }
                },
                particles: {
                    color: { value: "#fff200" },
                    links: {
                    color: "#fff200",
                    distance: 500,
                    enable: false,
                    opacity: 0.4,
                    width: 2
                    },
                    move: {
                    attract: { enable: false, rotateX: 600, rotateY: 1200 },
                    direction: "none",
                    enable: true,
                    outMode: "out",
                    random: false,
                    size: true,
                    speed: 0.1,
                    straight: false
                    },
                    number: { density: { enable: true, area: 800 }, value: 400 },
                    opacity: {
                    random: true,
                    value: 0.5
                    },
                    shape: {
                    type: "circle"
                    },
                    size: {
                    random: true,
                    value: 4
                    }
                },
                detectRetina: true
                }}
            />
        </div>
    )
}