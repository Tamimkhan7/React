

// In React, the useState Hook allows you to add state to functional components.useState returns an array with two values: the current state and a function to update it.The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called
// The useEffect hook in React allows you to perform side effects in function components.It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components
import { useState, useEffect } from "react";

export default function Quote() {

    const [quotes, setQuote] = useState(null);

    useEffect(() => {

    }, []);



    return (
        <div>
            <h1>Get quotes using fetch API</h1>
            <div>{ }</div>
        </div>
    );
}