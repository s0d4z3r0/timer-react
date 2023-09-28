import styles from "./Modal.module.css";
import PropTypes from 'prop-types'

const Modal = ({ setModalFinish }) => {
  // Fecha o modal caso o usuário clique no elemento com className 'close' ou 'modal_bg'
  const handleClose = (e) => {
    if (
      e.target.className.includes("close") ||
      e.target.className.includes("modal_bg")
    ) {
      setModalFinish(false);
    }
  };

  return (
    <div className={styles.modal}>
      <div className={styles.modal_bg} onClick={(e) => handleClose(e)}>
        <div className={styles.modal_content}>
          <button className={styles.close} onClick={(e) => handleClose(e)}>
            X
          </button>
          <h2>FIM DO TEMPO</h2>
        </div>
      </div>
    </div>
  );
};

Modal.propTypes = {
  setModalFinish: PropTypes.func.isRequired
}

export default Modal;
