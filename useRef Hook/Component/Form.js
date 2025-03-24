import { useEffect, useRef } from "react";


//default function hole oi function return kora lage na just value gula return kore dile hoye jay, even default function na hole oi function ta return kora lage 
export default function Form() {
    const inputRef = useRef(null); //we provide initial value is null that's means there has no initial value 

    useEffect(() => {
        console.log(inputRef.current); //inputref diye basically ami input tag ar references ta use korteci
        inputRef.current.focus(); //akhn ami input field ta focus a rakhte parci, just use references //dom ai akta function, amra just id diye dorte partam input field ke then oita theke focus a call korte partam but amra reference diye easyli solve korte parci
    }, []);

    return (
        <div>
            <p>
                <Input ref={inputRef} type="text" placeholder="Enter something" />
            </p>
        </div>
    );
}