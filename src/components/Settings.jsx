import { ReactComponent as IconSettings } from "../assets/icon-settings.svg";
import { ReactComponent as IconClose } from "../assets/icon-close.svg";
import { ReactComponent as IconCheckMark } from "../assets/icon-check-mark.svg";
import {useState } from 'react'
import MinutesInput from './MinutesInput'
const Settings = ({
    pomodoroTime,
    setPomodoroTime,
    shortBreakTime,
    setShortBreakTime,
    longBreakTime,
    setLongBreakTime,
    font,
    setFont,
    color,
    setColor
  }) => {
    const [isModalOpen, setIsModalOpen] = useState(false)
    const [localFont, setLocalFont] = useState(font)
    const [localColor, setLocalColor] = useState(color)
    const [localPomodoroTime, setLocalPomodoroTime] = useState(pomodoroTime)
    const [localShortBreakTime, setLocalShortBreakTime] = useState(shortBreakTime)
    const [localLongBreakTime, setLocalLongBreakTime] = useState(longBreakTime)
    const setSettings = () => {
        setFont(localFont)
        setColor(localColor)
        if(localPomodoroTime !== pomodoroTime) setPomodoroTime(localPomodoroTime)
        if(localShortBreakTime !== shortBreakTime) setShortBreakTime(localShortBreakTime)
        if(localLongBreakTime !== longBreakTime) setLongBreakTime(localLongBreakTime)
        setIsModalOpen(false)
    }
    const closeModal = () => {
        setIsModalOpen(false)
        setLocalColor(color)
        setLocalFont(font)
    }
    return (
        <div className="settings-wrapper">
            <IconSettings className="settings-icon" onClick={()=>setIsModalOpen(true)}/>
            {isModalOpen && <div className="settings-modal-bg">
                <div className="settings-modal">
                    <div className="settings-modal-header">
                        <h2>Settings</h2>
                        <IconClose className="settings-close-icon" onClick={closeModal}/>
                    </div>
                    <div className="settings-modal-body">
                        <div className="minutes-settings-container">
                            <h3>{'Time (Minutes)'}</h3>
                            <div className="minutes-settings">
                                <MinutesInput title='pomodoro' localTime={localPomodoroTime} setLocalTime={setLocalPomodoroTime}/>
                                <MinutesInput title='short-break' localTime={localShortBreakTime} setLocalTime={setLocalShortBreakTime}/>
                                <MinutesInput title='long-break' localTime={localLongBreakTime} setLocalTime={setLocalLongBreakTime}/>
                            </div>
                        </div>
                        <div className="font-settings">
                            <h3>Font</h3>
                            <div className="font-setting">
                            <button 
                            className={`kumbh ${localFont === 'Kumbh Sans' ? 'selected' : ''}`} 
                            onClick={()=>setLocalFont('Kumbh Sans')}
                            >
                            <span>Aa</span>
                            </button>
                            <button 
                            className={`roboto ${localFont === 'Roboto Slab' ? 'selected' : ''}`}
                            onClick={()=>setLocalFont('Roboto Slab')} 
                            >
                            <span>Aa</span>
                            </button>
                            <button 
                            className={`mono ${localFont === 'Space Mono' ? 'selected' : ''}`}
                            onClick={()=>setLocalFont('Space Mono')}
                            >
                            <span>Aa</span>
                            </button>
                            </div>
                        </div>
                        <div className="color-settings">
                            <h3>Color</h3>
                            <div className="color-setting">
                                <button className={`orange ${localColor === '#F87070' ? 'selected' : ''}`} onClick={()=> setLocalColor('#F87070')}>{localColor == '#F87070' ? <IconCheckMark/>: null}</button>
                                <button className={`blue ${localColor === '#70F3F8' ? 'selected' : ''}`} onClick={()=> setLocalColor('#70F3F8')}>{localColor == '#70F3F8' ? <IconCheckMark/>: null}</button>
                                <button className={`purple ${localColor === '#D881F8' ? 'selected' : ''}`} onClick={()=> setLocalColor('#D881F8')}>{localColor == '#D881F8' ? <IconCheckMark/>: null}</button>
                            </div>
                        </div>
                    </div>
                    <button className="apply" onClick={setSettings}>
                        Apply
                    </button>
                </div>
            </div>}
        </div>
    )
}

export default Settings