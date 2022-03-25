import styles from '/styles/header.module.scss'

export default function Header() {

    return (
        <header className={styles.headerBar}>
            <nav className={styles.navbar}>
            <ul>
                <li><a href="#me"> 01. Me </a></li>
            </ul>
            </nav>
      </header>
    );
}