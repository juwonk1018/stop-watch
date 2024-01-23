import React, {useState, useEffect, useRef} from 'react';
import './StopWatch.css';

type stopWatchProps = {
    darkMode : boolean;
    visibleButton : boolean;
    recordList : string[][];
    setRecordList : React.Dispatch<React.SetStateAction<string[][]>>;
};

function timeHMS(time : number) {
    return String(Math.floor(time/3600)).padStart(2, "0")+":"+String(Math.floor(time/60)%60).padStart(2, "0")+":"+String(Math.floor(time%60)).padStart(2, "0");
}

const StopWatch = ({darkMode, visibleButton, recordList, setRecordList} : stopWatchProps) => {

    const startTime = useRef(0);
    const prevStopWatch = useRef(0);
    const recordID = useRef(1);
    const [time, setTime] = useState<number>(0);
    const [progress, setProgress] = useProgress();
    
    function useProgress(): [boolean, React.Dispatch<React.SetStateAction<boolean>>];

    function useProgress(){

        const [progress, setProgress] = useState<boolean>(false);
        const mounted = useRef(false);
    
        useEffect(() => {
            if(!mounted.current){        
                mounted.current = true;
            }
            
            else{
                console.log(progress); 
                if(progress){
                    let requestID : number;
                    
                    startTime.current = Date.now() - time * 1000;
                    const calculateTimer = () => {
                        setTime((Date.now() - startTime.current) / 1000);
                        requestID = requestAnimationFrame(() => calculateTimer());
                    }
                    requestAnimationFrame(() => calculateTimer());
    
                    return() => {
                        
                        cancelAnimationFrame(requestID);
                    }
                }
                else{
                    console.log("Stop watch not working.");                    
                }
            }
            
        }, [progress])
    
        return [progress, setProgress];
    }

    function deleteRecord(recordID : string) {
        const newRecords = recordList.filter((record:(string|number)[]) => record[0] != recordID);
        setRecordList(newRecords);   
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
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M8 5v14l11-7z"/></svg>
                        </button>}
                        {progress && <button onClick={() => setProgress(false)}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z"/></svg>
                        </button>}
                        {<button onClick={() => {setTime(0); prevStopWatch.current = 0; setProgress(false); setRecordList([])}}>
                            <svg xmlns="http://www.w3.org/2000/svg" enableBackground="new 0 0 24 24" height="24" viewBox="0 0 24 24" width="24"><g><path d="M0,0h24v24H0V0z" fill="none"/></g><g><g><path d="M12,5V2L8,6l4,4V7c3.31,0,6,2.69,6,6c0,2.97-2.17,5.43-5,5.91v2.02c3.95-0.49,7-3.85,7-7.93C20,8.58,16.42,5,12,5z"/><path d="M6,13c0-1.65,0.67-3.15,1.76-4.24L6.34,7.34C4.9,8.79,4,10.79,4,13c0,4.08,3.05,7.44,7,7.93v-2.02 C8.17,18.43,6,15.97,6,13z"/></g></g></svg>
                        </button>
                        }
                        <button onClick={() => {console.log(recordList); setRecordList((prev : string[][]) => [...prev, [recordID.current.toString(), timeHMS(time-prevStopWatch.current), timeHMS(time)]]); prevStopWatch.current = time; recordID.current += 1;}}>
                            <svg xmlns="http://www.w3.org/2000/svg" height="20" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none"/><path d="M7.88 3.39L6.6 1.86 2 5.71l1.29 1.53 4.59-3.85zM22 5.72l-4.6-3.86-1.29 1.53 4.6 3.86L22 5.72zM12 4c-4.97 0-9 4.03-9 9s4.02 9 9 9c4.97 0 9-4.03 9-9s-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7s3.13-7 7-7 7 3.13 7 7-3.13 7-7 7zm1-11h-2v3H8v2h3v3h2v-3h3v-2h-3V9z"/></svg>
                        </button>
                    </div>
                    }
                    <div className="emptyDiv"></div>
                </div>
                
                {
                    <div className = {"recordList " + (visibleButton ? '' : 'recordList-hide')}>
                    <table>
                        <thead>
                            <th className = {(darkMode ? 'dark' : 'light')}>No.</th>
                            <th className = {(darkMode ? 'dark' : 'light')}>LAB TIME</th>
                            <th className = {(darkMode ? 'dark' : 'light')}>TOTAL</th>
                            <th className = {(darkMode ? 'dark' : 'light')}></th>
                        </thead>
                        
                        <tbody>
                            {recordList.map((item, idx) =>(
                                <tr key={idx+1}>
                                    <td>{idx+1}</td>
                                    <td>{item[1]}</td>
                                    <td>{item[2]}</td>
                                    <td>
                                        <button className = {(darkMode ? 'dark' : 'light')} id = "deleteRecordBtn" onClick = {() => deleteRecord(item[0])}>
                                            ─
                                        </button>
                                    </td>
                                </tr>  
                            ))}
                        </tbody>
                    </table>
                </div>
                }
                
                
            </div>
        </div>
    )
}

export default StopWatch;