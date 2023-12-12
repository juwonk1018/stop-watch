import React, {useState, useEffect, useRef} from 'react';

import './StopWatch.css';

export default function StopWatch() {

    const [time, setTime] = useState(0);
    const [progress, setProgress] = useProgress();

    function useProgress() {

        const [progress, setProgress] = useState(false);
        const mounted = useRef(false);

        useEffect(() => {

            if(!mounted.current){
                mounted.current = true;
            }
            
            else{
                console.log("업데이트");        
                if(progress){
                    const interval = setInterval(() => setTime((prev) => prev + 0.1), 100);
                    return () => {
                        clearInterval(interval);
                    }
                }
                else{
                    console.log("Stop watch not work.")
                }
            }
            
        }, [progress])

        return [progress, setProgress];
    }
    

    return (
        <div className="stopWatchWrapper">
            <div className="stopWatchDisplay">
                {String(parseInt(time/3600)).padStart(2, "0")}:{String(parseInt(time/60)).padStart(2, "0")}:{String(parseInt(time%60)).padStart(2, "0")}
            </div>

            <div className="buttonGroup">
                {!progress && <button onClick={() => setProgress(true)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg><span>START</span>
                </button>}
                {progress && <button onClick={() => setProgress(false)}>
                    <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg><span>STOP</span>
                </button>}
                <button onClick={() => setTime(0)}>
                    <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,5V2L8,6l4,4V7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02c3.95-0.49,7-3.85,7-7.93C20,8.58,16.42,5,12,5z"/><path d="M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z"/></g></g></svg><span>RESET</span>
                </button>
            </div>
        </div>
    )
}
