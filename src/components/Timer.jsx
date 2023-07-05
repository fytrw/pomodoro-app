import { useEffect, useRef } from 'react';

const Timer = ({
  totalSeconds,
  secondsRemaining,
  setSecondsRemaining,
  timerState,
  setTimerState,
  TimerStates,
}) => {
  const intervalId = useRef(null);

  useEffect(() => {
    if (timerState === TimerStates.RUNNING) {
      intervalId.current = setInterval(() => {
        setSecondsRemaining(prevSeconds => {
          if (prevSeconds <= 1) {
            clearInterval(intervalId.current);
            setTimerState(TimerStates.FINISHED);
            return 0;
          }
          return prevSeconds - 1;
        });
      }, 1000);
    }

    return () => {
      if (intervalId.current) {
        clearInterval(intervalId.current);
      }
    };
  }, [timerState, setTimerState, setSecondsRemaining, TimerStates]);

  const startOrPauseTimer = () => {
    if ([TimerStates.NOT_STARTED, TimerStates.PAUSED].includes(timerState)) {
      if (secondsRemaining === 0) {
        setSecondsRemaining(totalSeconds);
      }
      setTimerState(TimerStates.RUNNING);
    } else if (timerState === TimerStates.RUNNING) {
      setTimerState(TimerStates.PAUSED);
    } else if (timerState === TimerStates.FINISHED) {
      setSecondsRemaining(totalSeconds);
      setTimerState(TimerStates.NOT_STARTED);
    }
  };

  const strokeWidth = 12;
  const radius = 340 / 2 - strokeWidth / 2;
  const circumference = 2 * Math.PI * radius;
  const dashOffset = (secondsRemaining / totalSeconds) * circumference;

  const buttonText = {
    [TimerStates.NOT_STARTED]: 'Start',
    [TimerStates.RUNNING]: 'Pause',
    [TimerStates.PAUSED]: 'Start',
    [TimerStates.FINISHED]: 'Restart',
  }[timerState];

  const minutes = Math.floor(secondsRemaining / 60);
  const seconds = String(secondsRemaining % 60).padStart(2, '0');

  return (
    <div className="timer-wrapper">
      <div className="inner-timer">
      <svg width="95%" height="95%" viewBox="0 0 340 340">
          <circle
            className="circle-oval"
            cx="50%"
            cy="50%"
            r={radius}
            strokeWidth={strokeWidth}
            fill="none"
            strokeDasharray={circumference}
            strokeDashoffset={circumference - dashOffset}
            strokeLinecap="round"
            transform="rotate(-90, 170, 170)"
          />
        </svg>
      <div className='timer-text'>
        <span className="digit-container">{minutes}</span>:<span className="digit-container">{seconds}</span>
      </div>
      <button className="timer-button" onClick={startOrPauseTimer}>
        {buttonText}
      </button>
      </div>
    </div>
  );
};

export default Timer;
