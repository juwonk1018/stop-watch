import React, {useState} from 'react';

import './StopWatch.css';

export default function StopWatch() {

    const [timer, setTimer] = useState("");

    return (
        <div className="stopWatchWrapper">
            <div className="stopWatchDisplay">00:00:00</div>

            <div className="buttonGroup">
                <button>START</button>
                <button>STOP</button>
                <button>RESET</button>
            </div>
        </div>
    )
}
