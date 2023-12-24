import styles from "../landing.module.css";

export const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles["footer-wrapper"]}>
        <ul className={styles["options-footer"]}>
          <li>© Urpi Co. 2023</li>
          <li>
          <a href="https://wa.link/n603x3" target="_blank">Whatsapp</a>
          </li>
          <li>
          <a href="https://twitter.com/juniormedrano19" target="_blank">Twitter</a>
          </li>
          <li>
            <a href="https://www.linkedin.com/in/juniormedrano/" target="_blank">LinkedIn</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};
