import { useReducer } from "react";

const initialState = 0;
const reducer = (state, action) => {
    switch (action) {
        case 'increment':
            return state + 1;
        case 'decrement':
            return state - 1;
        default:
            return state;
    }
}

export default function counter() {
    //as like usestate function, first a data and second how are change our date 
    const [count, dispatch] = useReducer(reducer, initialState);
    return (
        <div>
            <div>Count - {count}</div>
            <button type="button" onClick={() => dispatch('increment')}>Increment</button>
            <button type="button" onClick={() => dispatch('decrement')}>Decrement</button>
        </div>
    );
}