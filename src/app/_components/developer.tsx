import Head from 'next/head'
import Header from './header.tsx'
import LeftBar from './leftBar.tsx'
import Skills from './skills.tsx'
import About from './about.tsx'
import Me from './me.tsx'

export default function Developer() {

    return (
      <div className="min-w-[75vh] bg-[rgb(55,_55,_55)] text-[#eaeaea]      ">
        <Head>
          <title>Michael Bazzanti</title>
          <meta name="description" content="Michael Bazzanti website" />
          <link rel="icon" href="/favicon.ico" />
        </Head>
  
        <Header></Header>
        <LeftBar></LeftBar> 
  
        <div className="pt-12 pr-[0] pb-[0] pl-32 min-h-screen" >
          <main className="min-h-[80vh] flex-[1] flex flex-col" >
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
  
          <footer className="px-32 py-[0] flex flex-[1] px-[0] py-8 border-t-[1px_solid_#eaeaea] justify-center items-center">
              Designed and built by Michael Bazzanti
              {/* <span className={styles.logo}>
                <Image src="/vercel.svg" alt="Vercel Logo" width={72} height={16} />
              </span> */}
          </footer>
        </div>
      </div>
      )
}