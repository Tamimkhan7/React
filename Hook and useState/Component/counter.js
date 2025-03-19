import { useState } from 'react';


function counter() {
    const [count, setCounter] = useState(0);

    return (
        <div>
            {count}
            <p>
                {/* <button type='button' onClick={() => setCounter(count + 1)}>Add 1</button> */}
                {/* below function recommendation for updating the previous value */}
                <button type='button' onClick={() => setCounter((previousstate) => previousstate + 1)}>Add 1</button>
            </p>
        </div >
    );
}

export default counter;