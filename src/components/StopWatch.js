import React, {useState, useEffect, useRef} from 'react';
import './StopWatch.css';

export default function StopWatch({darkMode, setDarkMode, recordList, setRecordList, visibleButton, setVisibleButton}) {

    const startTime = useRef(0);
    const prevStopWatch = useRef(0);
    const [time, setTime] = useState(0);
    const [progress, setProgress] = useProgress();

    function timeHMS(time) {
        return String(Math.floor(time/3600)).padStart(2, "0")+":"+String(Math.floor(time/60)%60).padStart(2, "0")+":"+String(Math.floor(time%60)).padStart(2, "0");
    }

    function useProgress() {
        const [progress, setProgress] = useState(false);
        const mounted = useRef(false);

        useEffect(() => {

            if(!mounted.current){        
                mounted.current = true;
            }
            
            else{    
                if(progress){
                    let requestID;

                    startTime.current = Date.now() - time * 1000;
                    function calculateTimer(){
                        setTime((Date.now() - startTime.current) / 1000);
                        requestID = requestAnimationFrame(calculateTimer);
                    }
                    requestAnimationFrame(calculateTimer);

                    return() => {
                        cancelAnimationFrame(requestID);
                    }
                }
                else{
                    console.log("Stop watch not work.");                    
                }
            }
            
        }, [progress])

        return [progress, setProgress];
    }
    
    return (
        
        <div className="stopWatchWrapper">
            
            <div className="stopWatchDisplay">
                <div className="displayPanel">
                    <span id="displayTime">{timeHMS(time)}</span>
                </div>

                <div className="buttonContainer">
                    {visibleButton && <div className={"progressButtons"}>
                        {!progress && <button onClick={() => setProgress(true)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg><span>Start</span>
                        </button>}
                        {progress && <button onClick={() => setProgress(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg><span>Stop</span>
                        </button>}
                        {<button onClick={() => {setTime(0); prevStopWatch.current = 0; setProgress(false); setRecordList([])}}>
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,5V2L8,6l4,4V7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02c3.95-0.49,7-3.85,7-7.93C20,8.58,16.42,5,12,5z"/><path d="M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z"/></g></g></svg><span>Reset</span>
                        </button>
                        }
                        <button onClick={() => {setRecordList((prev) => [...prev, [timeHMS(time-prevStopWatch.current), timeHMS(time)]]); prevStopWatch.current = time}}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg><span>REC</span>
                        </button>
                    </div>
                    }
                    <div className="emptyDiv"></div>
                </div>
                
                
                <div className = {"recordList " + (visibleButton ? '' : 'recordList-hide')}>
                    <table>
                        <th>No.</th>
                        <th>LAB TIME</th>
                        <th>TOTAL TIME</th>
                        {recordList.map((item, idx) =>(
                            <tr>
                                <td>{idx+1}</td>
                                <td>{item[0]}</td>
                                <td>{item[1]}</td>
                            </tr>  
                        ))}
                    </table>
                </div>
                
            </div>
        </div>
    )
}
