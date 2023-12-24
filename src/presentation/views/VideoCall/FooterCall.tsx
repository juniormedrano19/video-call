import { ICallButton } from "../../../application/interfaces";
import Svg from "../../../components/Svg";
import { Icons } from "../../../components/Svg/iconsPack";
import { callButtons } from "../../../data/call-buttons";
import styles from './video-call.module.css'

export const FooterCall = () => {
  return (
    <footer className={styles['footer-call']}>
      <div className={styles['wrapper-footer']}>
        {callButtons?.map(({ title, icon }: ICallButton, index) => {
          return (
            <div title={title} key={index} className={styles['footer-button']}>
              <Svg icon={Icons[icon as keyof typeof Icons]} />
            </div>
          );
        })}
      </div>
    </footer>
  );
};
