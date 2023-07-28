import  React, { useState , useEffect } from 'react';
import "./DateTime.css";

export const DateTime = () => {

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <p>  {date.toLocaleTimeString()}</p> <br />
            <p>  {date.toLocaleDateString()}</p>

        </div>
    )
}

export default DateTime;