import { IHeaderCall } from "../../../application/interfaces";
import { getWordsToAvatar } from "../../../helpers/getWordstoAvatar";
import styles from "./video-call.module.css";

export const HeaderCall = ({ imgUser, user }: IHeaderCall) => {
  return (
    <header className={styles["header-call"]}>
      <div className={styles["wrapper-header-call"]}>
        <div className={styles["first-header-call"]}>
          <div>
            <h3>urpi</h3>
          </div>

          <div>
            <p>Reunión de prueba </p>
            <span>Diciembre 26, 2022 | 10:00 AM </span>
          </div>
        </div>
        <div className={styles["second-header-call"]}>
          
          <div className={styles.avatar}>
            <div className={styles["wrapper-avatar"]}>
              <div className={styles["img-avatar"]}>
                {imgUser ? (
                  <img src={imgUser} alt="me" />
                ) : (
                  <p>{getWordsToAvatar(user)}</p>
                )}
              </div>

              <div className={styles["text-avatar"]}>
                <p>{user}</p>
                <span>Usuario</span>
              </div>
            </div>

            <div className={styles["dots-avatar"]}>
             
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
