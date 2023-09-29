import styles from "./Footer.module.css";

const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        Criado e Desenvolvido por: {/* */}
        <span>
          <a
            href="https://github.com/s0d4z3r0"
            target="_blank"
            rel="noreferrer"
          >
            &copy;André Falcão
          </a>
        </span>
      </p>
    </div>
  );
};

export default Footer;
