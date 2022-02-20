import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'

export default function Home() {



  return (
    <div className={styles.container}>
      <Head>
        <title>Michael Bazzanti</title>
        <meta name="description" content="Michael Bazzanti website" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <header className={styles.headerBar}>
        <nav className={styles.navbar}>
          <ul className={styles.ulbar}>
            <li><a href="#me"> 01. Me </a></li>
          </ul>
        </nav>
      </header>
      
      <div orientation="left">
        <ul className={styles.verticalList}>
          <li> email</li>
          <li> linkedin</li>
        </ul>
      </div>

      <div className={styles.content} >
        <main className={styles.main} >
          <section id="me">

            <h4 className={styles.smallTitle}>
              Hi, my name is
            </h4>

            <div className={styles.wrapperColoredText}>
              <div className={styles.fillColoredText}>
                <div className={styles.coloredText}>
                Michael_Bazzanti
                </div>
              </div>
              <div className={styles.basicText}>
               Michael_Bazzanti
              </div>
            </div>

            <div className={styles.wrappedAnimationText }>
              <span data-content="Michael Bazzanti" className={styles.animationText }>
              </span>
              Michael Bazzanti
            </div>

            <h4 className={styles.smallTitle}>
              and I am a 
            </h4>

            <h1 className={styles.titleJob}>
              Fullstack_Developer
            </h1>

            <p className={styles.description}>
              I love discovering new {' '} 
              <code className={styles.code}>technologies</code> and build fantastic {' '} 
              <code className={styles.code}>digital</code> experiences.
            </p>
          </section> 

    {/* 

            <div className={styles.grid}>
              <a href="https://nextjs.org/docs" className={styles.card}>
                <h2>Documentation &rarr;</h2>
                <p>Find in-depth information about Next.js features and API.</p>
              </a>

              <a href="https://nextjs.org/learn" className={styles.card}>
                <h2>Learn &rarr;</h2>
                <p>Learn about Next.js in an interactive course with quizzes!</p>
              </a>

              <a
                href="https://github.com/vercel/next.js/tree/canary/examples"
                className={styles.card}
              >
                <h2>Examples &rarr;</h2>
                <p>Discover and deploy boilerplate example Next.js projects.</p>
              </a>

              <a
                href="https://vercel.com/new?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
                className={styles.card}
              >
                <h2>Deploy &rarr;</h2>
                <p>
                  Instantly deploy your Next.js site to a public URL with Vercel.
                </p>
              </a>
            </div> */}
        </main>

        <footer className={styles.footer}>
            Designed and built by Michael Bazzanti
            {/* <span className={styles.logo}>
              <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
            </span> */}
        </footer>
      </div>
    </div>
  )
}
