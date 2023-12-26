import { useEffect, useRef } from "react";
import video1 from "../../../../assets/video/video1.mp4";
import video2 from "../../../../assets/video/video2.mp4";
import styles from "../landing.module.css";

export const Hero = () => {
  const videoRef1 = useRef<HTMLVideoElement | null>(null);
  const videoRef2 = useRef<HTMLVideoElement | null>(null);
  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.play();
    }
    if (videoRef2.current) {
      videoRef2.current.play();
    }
  }, []);
  return (
    <main className={styles.main}>
      <div className={styles["wrapper-main"]}>
        <div className={styles["hero"]}>
          <div className={styles["hero-img"]}>
            <img
              src="https://framerusercontent.com/images/0zdTtxxiDzMeScfXQjnaHaoqXUM.png"
              alt=""
              srcSet="https://framerusercontent.com/images/0zdTtxxiDzMeScfXQjnaHaoqXUM.png?scale-down-to=512 512w, https://framerusercontent.com/images/0zdTtxxiDzMeScfXQjnaHaoqXUM.png?scale-down-to=1024 1024w, https://framerusercontent.com/images/0zdTtxxiDzMeScfXQjnaHaoqXUM.png?scale-down-to=2048 2048w, https://framerusercontent.com/images/0zdTtxxiDzMeScfXQjnaHaoqXUM.png 2880w"
              sizes="calc((min(100vw, 1480px) - 80px) * 1.0286)"
              style={{
                display: "block",
                width: "100%",
                height: "100%",
                borderRadius: "inherit",
                objectPosition: "center",
                objectFit: "cover",
                imageRendering: "auto",
              }}
            />
          </div>
          <div className={styles.video1}>
            <video ref={videoRef1} width="640" height="360" autoPlay muted>
              <source src={video2} type="video/mp4" />
              Tu navegador no soporta el tag de video.
            </video>
          </div>
          <div className={styles.video2}>
            <video ref={videoRef2} width="640" height="360" autoPlay muted>
              <source src={video1} type="video/mp4" />
              Tu navegador no soporta el tag de video.
            </video>
          </div>
        </div>
      </div>
    </main>
  );
};
