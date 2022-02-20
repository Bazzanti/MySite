import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import mypic from '../public/profile.jpg'

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
                  <span data-content="Fullstack_Developer" aria-hidden="true" className={styles.animationText }>
                  </span>
                  Fullstack_Developer
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
