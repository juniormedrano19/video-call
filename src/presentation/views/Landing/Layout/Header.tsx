
import styles from '../landing.module.css'


export const Header = () => {
    return (

        <header className={styles.header}>
            <nav className={styles['wrapper-header']}>
                <div className={styles.brand}>
                    <h3>urpi</h3>
                   {/*  <Svg icon={Icons.bird} /> */}
                </div>

           
                    <ul className={styles['version-control']}>
                        <li>
                        <a href="https://bitbucket.org/juniormed19/video-call/src/main/" target="_blank">BitBucket</a>
                        </li>
                        <li>
                        <a href="https://gitlab.com/junior.med19/video-call" target="_blank">GitLab</a>
                        </li>
                        <li>
                        <a href="https://github.com/juniormedrano19/video-call" target="_blank">GitHub</a>
                        </li>
                    </ul>
               
            </nav>
          

        </header>
    )
}
