export function Timer(){
return(
    <div>
        
    </div>
)
}

// import { useEffect, useState } from "react";

// const Countdown = ({ initialSeconds }) => {
//   const [secondsLeft, setSecondsLeft] = useState(initialSeconds);

//   useEffect(() => {
//     if (secondsLeft <= 0) return;

//     const interval = setInterval(() => {
//       setSecondsLeft((prev) => prev - 1);
//     }, 1000);

//     return () => clearInterval(interval);
//   }, [secondsLeft]);

//   const formatTime = (totalSeconds) => {
//     const days = Math.floor(totalSeconds / (24 * 3600));
//     const hours = Math.floor((totalSeconds % (24 * 3600)) / 3600);
//     const minutes = Math.floor((totalSeconds % 3600) / 60);
//     const seconds = totalSeconds % 60;

//     const pad = (n) => String(n).padStart(2, "0");

//     return `${pad(days)}:${pad(hours)}:${pad(minutes)}:${pad(seconds)}`;
//   };
// };