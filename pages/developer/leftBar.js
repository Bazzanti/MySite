import styles from '/styles/leftBar.module.scss'
import {AiOutlineMail, AiOutlineLinkedin} from 'react-icons/ai';

export default function LeftBar() {

    return (
        <div orientation="left">
          <ul className={styles.verticalList}>
            <li className={styles.listIcon}> 
              <a href="mailto:michael6993@msn.com">  <AiOutlineMail /> </a>
            </li>
            <li className={styles.listIcon}> 
              <a href="https://www.linkedin.com/in/michael-bazzanti-589221129/"> <AiOutlineLinkedin /> </a>
            </li>
          </ul>
        </div>
    );
}