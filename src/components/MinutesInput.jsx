import {ReactComponent as IconArrowUp} from '../assets/icon-arrow-up.svg';
import {ReactComponent as IconArrowDown} from '../assets/icon-arrow-down.svg';
const MinutesInput = ({localTime, setLocalTime, title}) => {

    return (
        <div className="minutes-input-container">
            <label htmlFor={title}>{title}</label>
            <input
            type="number"
            id={title}
            value={localTime}
            onChange={(e) => setLocalTime(e.target.value)}
            />
            <IconArrowUp className="icon-arrowup"onClick={() => {setLocalTime(Number(localTime) + 1)}}/>
            <IconArrowDown className="icon-arrowdown" onClick={() => {setLocalTime(Number(localTime) - 1)}}/>
        </div>
    );
}

export default MinutesInput;