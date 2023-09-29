import styles from "./Timer.module.css";
import PropTypes from "prop-types";

const Timer = ({
  fiveMinutes,
  fifteenMinutes,
  thirtyMinutes,
  setStartPause,
  startPause,
  time,
  prevTime,
  display,
  handleReset,
  handleWork,
}) => {
  return (
    <div className={styles.timer}>
      <div className={styles.timer_content}>
        <h3 className={styles.title}>SZero Timer</h3>
        <div className={styles.work}>
          <button onClick={() => handleWork(fiveMinutes)}>5 min</button>
          <span>-</span>
          <button onClick={() => handleWork(fifteenMinutes)}>15 min</button>
          <span>-</span>
          <button onClick={() => handleWork(thirtyMinutes)}>30 min</button>
        </div>
        <h3 className={`${styles.timerDisplay} ${time <= 0 && styles.end}`}>
          {display}
        </h3>
        {time > 0 ? (
          <div className={styles.buttonsStartPauseReset}>
            <button
              className={styles.startStop}
              onClick={() => setStartPause(!startPause)}
            >
              {startPause ? "PAUSE" : "START"}
            </button>
            <button
              className={styles.resetOnOperation}
              onClick={() => handleReset(prevTime)}
            >
              RESET
            </button>
          </div>
        ) : (
          <div className={styles.buttonsStartPauseReset}>
            <button
              className={styles.reset}
              onClick={() => handleReset(prevTime)}
            >
              RESET
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

Timer.propTypes = {
  fiveMinutes: PropTypes.number.isRequired,
  fifteenMinutes: PropTypes.number.isRequired,
  thirtyMinutes: PropTypes.number.isRequired,
  setStartPause: PropTypes.func.isRequired,
  startPause: PropTypes.bool.isRequired,
  time: PropTypes.number.isRequired,
  prevTime: PropTypes.number.isRequired,
  display: PropTypes.string.isRequired,
  handleReset: PropTypes.func.isRequired,
  handleWork: PropTypes.func.isRequired,
};

export default Timer;
