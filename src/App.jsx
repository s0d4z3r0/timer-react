import { useCallback, useEffect, useState } from "react";
import DarkMode from "./components/DarkMode";
import Timer from "./components/Timer";
import Modal from "./components/Modal";
import Footer from "./components/Footer";

function App() {
  // Dark and light mode
  const [theme, setTheme] = useState(true);
  const [darkOrLightMode, setDarkOrLightMode] = useState("light");

  useEffect(() => {
    if (theme === false) {
      setDarkOrLightMode("dark");
    } else {
      setDarkOrLightMode("light");
    }
  }, [theme, setDarkOrLightMode]);

  document.body.setAttribute("className", darkOrLightMode);
  // Abrir modal
  const [modalFinish, setModalFinish] = useState(true);
  // Time em segundos
  const [time, setTime] = useState(300);
  // Formato do display
  const [display, setDisplay] = useState(`
  ${
    Math.floor(time / 60) < 10
      ? "0" + Math.floor(time / 60)
      : Math.floor(time / 60)
  }:${time % 60 < 10 ? "0" + (time % 60) : time % 60}
  `);
  // State para True === Start ou False === Pause
  const [startPause, setStartPause] = useState(false);
  // Times enviados em segundos
  const fiveMinutes = 300;
  const fifteenMinutes = 900;
  const thirtyMinutes = 1800;
  // Time selecionado anteriormente
  const [prevTime, setPrevTime] = useState(300);

  // Função que recebe o 'time' selecionado, guarda o 'prevTime', calcula o que é minuto e segundo e setta o 'display' para ficar no formato 'mm:ss'
  const handleWork = useCallback(
    (timeToWork) => {
      setTime(timeToWork);
      if (
        timeToWork === fiveMinutes ||
        timeToWork === fifteenMinutes ||
        timeToWork === thirtyMinutes
      ) {
        setPrevTime(timeToWork);
      }

      const timeMinutes = Math.floor(timeToWork / 60);
      const timeSeconds = timeToWork % 60;

      setDisplay(
        `${timeMinutes < 10 ? "0" + timeMinutes : timeMinutes}:${
          timeSeconds < 10 ? "0" + timeSeconds : timeSeconds
        }`
      );
    },
    [fiveMinutes, fifteenMinutes, thirtyMinutes]
  );

  // Hook que monitora o valor de 'startPause' e número do 'time' para fazer a contagem regressiva a cada 1 segundo
  useEffect(() => {
    if (startPause === true && time >= 0) {
      const countDown = setTimeout(() => {
        setTime(time - 1);
      }, 1000);

      handleWork(time);
      return () => clearTimeout(countDown);
    }
  }, [time, setTime, startPause, handleWork]);

  // Função Reset, setta o 'time' para o 'prevTime', envia para função handleWork e setta o startPause para falso (Pausando o useEffect)
  const handleReset = (prevTime) => {
    setTime(prevTime);
    handleWork(prevTime);
    setStartPause(false);
  };

  // Se o 'time' chegar a zero (menor que) executa a função 'handleReset' e abre o modal de alerta.
  if (time < 0) {
    setModalFinish(true);
    handleReset(prevTime);
  }

  return (
    <div className="timer">
      {modalFinish ? <Modal setModalFinish={setModalFinish} /> : ""}
      <DarkMode setTheme={setTheme} />
      <Timer
        setModalFinish={setModalFinish}
        setTime={setTime}
        fiveMinutes={fiveMinutes}
        fifteenMinutes={fifteenMinutes}
        thirtyMinutes={thirtyMinutes}
        setPrevTime={setPrevTime}
        setDisplay={setDisplay}
        setStartPause={setStartPause}
        startPause={startPause}
        time={time}
        prevTime={prevTime}
        display={display}
        handleReset={handleReset}
        handleWork={handleWork}
      />
      <Footer />
    </div>
  );
}

export default App;
