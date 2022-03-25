import styles from '/styles/header.module.scss'

export default function Header() {

    return (
        <header className={styles.headerBar}>
            <nav className={styles.navbar}>
            <ul>
                <li><a href="#me"> 01. Me </a></li>
                <li><a href="#about"> 02. About </a></li>
                <li><a href="#skill"> 03. Skills </a></li>
            </ul>
            </nav>
      </header>
    );
}