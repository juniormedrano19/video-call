import styles from "../landing.module.css";

export const Section = () => {
  const goToVideoCall=()=>{
    return (window.location.href = "/video-call");
  }
  return (
    <section className={styles.section}>
      <div className={styles['wrapper-section']}> 
        <div className={styles.heading}>
          <h1>Conectando Distancias en Tiempo Real</h1>
        </div>
   
          <div className={styles["sub-heading"]}>
            <p>
             Descubre una nueva forma de estar presente, sin
              importar la distancia. Con <b>Urpi</b>, Experimenta la magia de la cercanía a través de la pantalla.
            
            </p>
          </div>

          <div className={styles["btn-sub-heading"]}>
            <button onClick={goToVideoCall}>Empezar una reunión</button>
          </div>
        
          <div className={styles["bg-section"]}>
            <div className={styles.gradient}>
          
                <img
                  src="https://res.cloudinary.com/devs4/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1703356138/reto-tecnico/gradiente_cb7sqb.jpg?_s=public-apps"
                  alt="blue-purple gradient"
                  srcSet="https://res.cloudinary.com/devs4/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1703356176/reto-tecnico/gradiente-512_xcn9b2.jpg?_s=public-apps 512w, https://res.cloudinary.com/devs4/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1703356264/reto-tecnico/gradiente-1024_yg3psj.jpg?_s=public-apps 1024w, https://res.cloudinary.com/devs4/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1703356317/reto-tecnico/gradiente-2048_loddwz.jpg?_s=public-apps 2048w, https://res.cloudinary.com/devs4/image/upload/c_pad,b_auto:predominant,fl_preserve_transparency/v1703356395/reto-tecnico/gradiente-2636_bzp4av.jpg?_s=public-apps 2636w"
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
          </div>
         
        </div>
 
    </section>
  );
};
