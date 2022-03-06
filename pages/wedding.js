import Head from 'next/head'
import styles from '../styles/wedding.module.scss'

export default function Wedding() {

    return (
        <div className={styles.container}>
            <Head>
                <title>Wedding</title>
                <meta name="description" content="Wedding" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <h1>zoey puzzolente</h1>
        </div>
    )
}