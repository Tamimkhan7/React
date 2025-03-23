import React from "react";
import { useEffect, useState } from "react"; //useEffect and useState funciton are calling same, they are taken value from the react in the same way

export default function mycomponent() {
    const [count, setCount] = useState(0);
    const [date, setDate] = useState(new Date());
    // const [text, setText] = useState('');


    // calling tick for update the new date

    const tick = () => {
        setDate(new Date());
    }

    // now we are calling useEffect function

    useEffect(() => {
        // for checking purpose i will print the sentences 
        console.log(`Updating document title`);

        // this function calling every render not like calling first time rendering, it's has called every render time
        document.title = `Clicked ${count} times`;
    }, [count]); //we can say if my count value has update then i will render this function otherwise we don't render this function

    // this function call every rendering 
    useEffect(() => {
        console.log(`starting timer`); //for checking purpose
        const interval = setInterval(tick, 1000);
        // this function also return a value or full function

        return () => {
            console.log('Component unmounted'); //check is it work or not
            clearInterval(interval); //clearinterval clear the function
        };


    }, []); //if now we set blank array in the useEffect that means one time call this function as like componentDidMount 

    //now calling addclick for updating value of count value 

    const addclick = () => {
        setCount((preCount) => preCount + 1);
    }

    return (
        <div>
            <p>Time: {date.toLocaleTimeString()}</p>
            {/* <p>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
            </p> */}
            <p>
                <button type="button" onClick={addclick}>Click</button>
            </p>
        </div>
    );
}