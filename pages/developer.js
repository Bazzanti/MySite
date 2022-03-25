import Head from 'next/head'
import styles from '../styles/developer.module.scss'
import Me from './developer/me.js'
import Header from './developer/header.js'
import LeftBar from './developer/leftBar.js'
import Skills from './developer/skills.js'
import About from './developer/about.js'

export default function Developer() {

    return (
      <div className={styles.container}>
        <Head>
          <title>Michael Bazzanti</title>
          <meta name="description" content="Michael Bazzanti website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header></Header>
        <LeftBar></LeftBar>
  
        <div className={styles.content} >
          <main className={styles.main} >
            <section id="me">
              <Me></Me>
            </section> 
            <section id="about">
              <About></About>
            </section>
            <section id="skill">
              <Skills></Skills>
            </section>
  
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