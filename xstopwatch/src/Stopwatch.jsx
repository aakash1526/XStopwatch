import { useEffect, useState } from "react";

function Stopwatch()
{
  const[Timer,setTimer] = useState(0);
  const[isRunning,setIsRunning]= useState(false);
  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = time % 60;
    return `${minutes}:${seconds < 10 ? `0${seconds}` : seconds}`;
  };

  useEffect(()=>{
    let interval;
    if(isRunning){
    interval=setInterval(() =>{
     setTimer((prev) =>prev+1);
  },1000)
}else{
  clearInterval(interval);
}
return (()=>{
  clearInterval(interval);
})
},[isRunning]);
  return (
    <>
    <h1>Stopwatch</h1>
    <h2>Time : {formatTime(Timer)}</h2>
    <button onClick={()=>{
         setIsRunning((prev)=>!prev);
    }}>{isRunning?"Stop":"Start"}</button>
    <button onClick={()=>{

        setTimer(0);
        setIsRunning(false);
    }}>Reset</button>
    </>
  )
}
export default Stopwatch;