

// In React, the useState Hook allows you to add state to functional components.useState returns an array with two values: the current state and a function to update it.The Hook takes an initial state value as an argument and returns an updated state value whenever the setter function is called
// The useEffect hook in React allows you to perform side effects in function components.It replaces lifecycle methods like componentDidMount, componentDidUpdate, and componentWillUnmount in class components
import { useState, useEffect } from "react";
import axios from "axios";
export default function Quote() {

    const [quotes, setQuote] = useState(null);

    useEffect(() => {
        const fetchQuote = async () => {
            // now find the direct value and store the value in the res variable and which is store data value
            const res = await axios.get('http://api.quotable.io/random'); // this data take from API and this data format is string 
            // now we convert the data value into the res just call res.data
            setQuote(res.data);
        }

        fetchQuote();
    }, []);



    return (
        <div>
            <h1>Get quotes using fetch API</h1>
            {/* if quotes.content is null there are no error otherwise show the content value */}
            <div>{quotes?.content}</div>
        </div>
    );
}