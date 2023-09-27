import { useEffect, useState } from "react";
import styles from "./Timer.module.css";

const Timer = () => {
  const [time, setTime] = useState(300)
  const [seconds, setSeconds] = useState(time % 60);
  const [minutes, setMinutes] = useState(Math.floor(time / 60));
  const [display, setDisplay] = useState(`${minutes < 10 ? "0" + minutes : minutes}:${
           seconds < 10 ? "0" + seconds : seconds}`);
  const [timeStyle, setTimeStyle] = useState('')
  
  console.log(time)
  console.log(seconds)
  console.log(minutes)
  console.log(display)

  const handleWork = (time) => {
    setTime(time);

      const timeMinutes = Math.floor(time / 60);
      const timeSeconds = time % 60;

    setDisplay(
      `${timeMinutes < 10 ? "0" + timeMinutes : timeMinutes}:${
        timeSeconds < 10 ? "0" + timeSeconds : timeSeconds
      }`
    );
  };

  useEffect(() => {
    if(seconds === 300){
      setTimeStyle(styles.five)
    }else if(seconds === 900){
      setTimeStyle(styles.fifteen)
    }else if(seconds === 1800){
      setTimeStyle(styles.thirty)
    }else{
      return
    }
  }, [seconds])

  const handleStartPause = () => {
    
  }

  return (
    <div className={styles.timer}>
      <div className={styles.timer_content}>
        <h3 className={styles.title}>SZero Timer</h3>
        <div className={styles.work}>
          <button onClick={() => handleWork(300)}>5 min</button> <span>-</span>
          <button onClick={() => handleWork(900)}>15 min</button> <span>-</span>
          <button onClick={() => handleWork(1800)}>30 min</button>
        </div>
        <h3 className={`${styles.timerDisplay} ${timeStyle}`}>{display}</h3>
        <button className={styles.startStop} onClick={() => handleStartPause()}>
          START
        </button>
      </div>
    </div>
  );
};

export default Timer;
