import React from "react";
import { useState, useMemo, useCallback } from "react";
import Button from './Component/Button';
import showCount from './Component/showCount';
import Title from './Component/Title';

function App() {
    const [count1, setCount1] = useState(0);
    const [count2, setCount2] = useState(0);


    //usecallback funciton basically memerized the previos value 
    const incrementByone = useCallback(() => {
        setCount1((precount) => precount + 1);
    }, []);//ami bole dilam amar akbar render korar por nexttime jonno tumi memorized kore rakho


    const incrementByFive = useCallback(() => {
        setCount2((precount) => precount + 5);
    }, []);


    //useMemo basically amar previous value ta memerized kore rakhen and update value ta pathai dey
    const isEvenorOdd = useMemo(() => {
        let i = 0;
        while (i < 1e9) i++;//costly operation
        return count1 % 2 === 0; //if coun1 value is even they return true otherwise return false
    }, []);  //ami bole dilam amar akbar render korar por nexttime jonno tumi memorized kore rakho

    //jokhn amar count2 ar value render hoy tokhn jate isevenodd function render na hoy

    return (
        <div className="app">
            <Title />
            <showCount count={count1} title="Counter 1" />
            <span>{isEvenorOdd ? 'Even' : 'Odd'}</span>
            <Button handleClick={incrementByone}> Increment by one </Button>
            <hr />
            <showCount count={count2} title="Counter 2" />
            <Button handleClick={incrementByFive} >increment By Five</Button>
        </div>
    );
}

export default App;

//propos or argument basically provided references value not value 