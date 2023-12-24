
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
                        <li>Bitbucket</li>
                        <li>GitLab</li>
                        <li>GitHub</li>
                    </ul>
               
            </nav>
          

        </header>
    )
}
