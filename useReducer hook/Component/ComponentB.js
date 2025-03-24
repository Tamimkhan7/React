import { useContext } from "react";
import { counterContext } from "../App2";

export default function componentA() {
    const countContext = useContext(counterContext); //counterContext value taken from App2 file 

    return (
        <div>
            <p>component A</p>
            <button type="button" onClick={() => countContext.countDispatch('increment')}>Increment</button>
            <button type="button" onClick={() => countContext.countDispatch('decrement')}>Decrement</button>
        </div>
    );
}