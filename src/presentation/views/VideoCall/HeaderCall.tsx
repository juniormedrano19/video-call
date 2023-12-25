import Svg from "../../../components/Svg";
import { Icons } from "../../../components/Svg/iconsPack";
import styles from "./video-call.module.css";

export const HeaderCall = () => {
  return (
    <header className={styles["header-call"]}>
      <div className={styles["wrapper-header-call"]}>
        <div className={styles["first-header-call"]}>
          <div>
            <h3>urpi</h3>
          </div>

          <div>
            <p>[Internal] Weekly Report Marketing + Sales </p>
            <span>December 25th, 2022 | 11:00 AM </span>
          </div>
        </div>
        <div className={styles["second-header-call"]}>
          <div className={styles.participants}>
            <div>
            <img src="https://t3.ftcdn.net/jpg/02/43/12/34/360_F_243123463_zTooub557xEWABDLk0jJklDyLSGl2jrr.jpg" alt="user1" />
            </div>
            <div>
            <img src="https://res.cloudinary.com/dk0z4ums3/image/upload/v1639480293/attached_image/seluk-beluk-kepribadian-highly-sensitive-person.jpg" alt="user2" />
            </div>
            <div>
            <img src="https://t3.ftcdn.net/jpg/03/02/88/46/360_F_302884605_actpipOdPOQHDTnFtp4zg4RtlWzhOASp.jpg" alt="user3" />
            </div>
          <div>
          <img src="https://cdn.create.vista.com/api/media/small/204123334/stock-photo-portrait-bearded-smiling-man-shirt" alt="user4" />
          </div>
           
         
         
            <div className={styles['number-participants']}>
              <p>+9</p>
            </div>
          </div>
          <div className={styles['copy-link']}>
            <Svg icon={Icons.link} />
            <div>
              <p>cem-jnmt-hsu</p>
            </div>
          </div>
          <div className={styles.avatar}>
            <div className={styles['wrapper-avatar']}>
            <div className={styles['img-avatar']}> 
              <img
              src="https://res.cloudinary.com/devs4/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1703380219/reto-tecnico/me_tbecob.jpg?_s=public-apps"
              alt="me"
          
            />

            </div>
           
            <div className={styles['text-avatar']}>
              <p>Junior Medrano</p>
              <span>Moderador</span>
            </div>
          </div>
          
            <div className={styles['dots-avatar']}>
              <Svg icon={Icons.threeDots} />
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
