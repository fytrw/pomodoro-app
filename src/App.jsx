import './style.css'
import { useState, useEffect } from 'react';
import Menu from './components/Menu'
import Timer from './components/Timer'
import Settings from './components/Settings'

const TimerStates = {
  NOT_STARTED: 'NOT_STARTED',
  RUNNING: 'RUNNING',
  PAUSED: 'PAUSED',
  FINISHED: 'FINISHED'
};
const TimerTypes = {
  POMODORO: 'pomodoro',
  SHORT_BREAK: 'shortBreak',
  LONG_BREAK: 'longBreak',
};
function App() {
  const [timerState, setTimerState] = useState(TimerStates.NOT_STARTED);
  const [pomodoroTime, setPomodoroTime] = useState(25)
  const [shortBreakTime, setShortBreakTime] = useState(5)
  const [longBreakTime, setLongBreakTime] = useState(15)
  const [typeOfTimer, setTypeOfTimer] = useState('pomodoro')
  const totalSeconds = {
    [TimerTypes.POMODORO]: pomodoroTime * 60,
    [TimerTypes.SHORT_BREAK]: shortBreakTime * 60,
    [TimerTypes.LONG_BREAK]: longBreakTime * 60
  }[typeOfTimer];
  const [font, setFont] = useState('Kumbh Sans')
  const [color, setColor] = useState('#F87070')
  const [secondsRemaining, setSecondsRemaining] = useState(totalSeconds);

  useEffect(() => {
    setSecondsRemaining(totalSeconds);
    setTimerState(TimerStates.NOT_STARTED);
  }, [typeOfTimer, totalSeconds]);

  useEffect(() => {
    document.documentElement.style.setProperty('--font-family', font)
    document.documentElement.style.setProperty('--main-color', color)
  }, [font, color])
  
  return (
    <div className='wrapper'>
      <h1 className="app-title">pomodoro</h1>
      <Menu setTypeOfTimer={setTypeOfTimer}/>
      <Timer
        totalSeconds={totalSeconds}
        secondsRemaining={secondsRemaining}
        setSecondsRemaining={setSecondsRemaining}
        timerState={timerState}
        setTimerState={setTimerState}
        TimerStates={TimerStates}
        typeOfTimer={typeOfTimer}
      />
      <Settings
        pomodoroTime={pomodoroTime}
        setPomodoroTime={setPomodoroTime}
        shortBreakTime={shortBreakTime}
        setShortBreakTime={setShortBreakTime}
        longBreakTime={longBreakTime}
        setLongBreakTime={setLongBreakTime}
        font={font}
        setFont={setFont}
        color={color}
        setColor={setColor}
      />
    </div>
  )
}

export default App;
