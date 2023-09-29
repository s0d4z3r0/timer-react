import styles from "./DarkMode.module.css";
import PropTypes from "prop-types";

const DarkMode = ({ setTheme }) => {
  const toggleTheme = () => {
    setTheme((prevSetTheme) => !prevSetTheme);
  };

  return (
    <div className={styles.darkmode}>
      <label className={styles.darkmode_label}>
        <input
          type="checkbox"
          id="switch-darkMode"
          className={styles.switch}
          onChange={toggleTheme}
        />
        <label htmlFor="switch-darkMode"></label>
      </label>
    </div>
  );
};

DarkMode.propTypes = {
  setTheme: PropTypes.func.isRequired,
};

export default DarkMode;
