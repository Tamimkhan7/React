import React, { useReducer } from "react";
import componentA from './Component/ComponentB'

//for every use globally that's i used  createContext
export const counterContext = React.createContext();

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
};


export default function App2() {
    const [count, dispatch] = useReducer(reducer, initialState);

    return (
        <div className="app">
            <div>Count: {count}</div>
            {/* Wrap child components in the Context Provider and supply the state value. */}
            <counterContext.Provider value={{ countDispatch: dispatch }}>
                <componentA />
            </counterContext.Provider>
        </div>
    );
}