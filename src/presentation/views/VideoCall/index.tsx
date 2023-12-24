import { BodyCall } from './BodyCall'
import { FooterCall } from './FooterCall'
import { HeaderCall } from './HeaderCall'
import styles from './video-call.module.css'

export const VideoCall = () => {
  return (
    <section className={styles["layout"]}>
  <div className={styles["header"]}>
    <HeaderCall />
  </div>

  <div className={styles["body"]}>
    <BodyCall />
  </div>

  <div className={styles["footer"]}>
    <FooterCall />
  </div>
</section>
  )
}
