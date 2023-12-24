import Svg from '../../../components/Svg'
import { Icons } from '../../../components/Svg/iconsPack'
import styles from './video-call.module.css'

export const HeaderCall = () => {
  return (
    <header className={styles['header-call']}>
      <div>
      <h3>urpi</h3>
      <div>
        <p>[Internal] Weekly Report Marketing + Sales  </p>
        <span>June 12th, 2022 | 11:00 AM </span>
      </div>
      </div>
      <div>
        <span>1</span>
        <div>
            <Svg icon={Icons.link} />
            <div>
            <p>cem-jnmt-hsu</p>
            </div>
        
        </div>
        <div>
          <img src="https://res.cloudinary.com/devs4/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1703380219/reto-tecnico/me_tbecob.jpg?_s=public-apps" alt="me" 
          style={{
            width:'40px',
            height:'40px'
          }}
          />
          <div>
            <p>Junior Medrano</p>
            <span>Moderador</span>
          </div>
          <div>
          <Svg icon={Icons.threeDots} />
          </div>
        </div>

      </div>
      <div>
        
      </div>
      

    </header>
  )
}
