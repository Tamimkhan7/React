// import { useState } from 'react';

// function todo() {

//     //useState basically amake akta array provided kore, multiple time we call usestate for multiple value
//     const [todo, settodo] = useState('');
//     const [warning, setwarning] = useState(null);

//     //jehetu handleinput is it function that's why handleinput something
//     const handleInput = (e) => {
//         const inputvalue = e.target.value;
//         const uqdatewarning = inputvalue.includes('.js') ? 'You need javascript skill to complete the task. Do you have it?' : null;

//         //currently this is not working here that why we minimize it,,, and optimally we can call settodo for todo value updating and also uqdatewarning call for uqdatewarning value updating
//         // this.setState({
//         // todo: inputvalue,
//         //     uqdatewarning,
//         // });

//         settodo(inputvalue);
//         setwarning(uqdatewarning);
//     };

//     return (
//         <div>
//             <p>{todo}</p>
//             <p>
//                 {/* why don't use here this.handleinput because handleinput currectly inside the function method not class method that' why we don't this use here */}
//                 <textarea name='todo' value={todo} onChange={handleInput} />
//             </p>
//             <hr />
//             <h2>{warning || "Good Choice!"}</h2>
//         </div>
//     );

// }

// export default todo;


import { useState } from 'react';

function todo() {

    const [todo, settodo] = useState({
        title: '',
        description: ''
    });

    const { title, description } = todo;

    return (
        <div>
            <p>{title}</p>
            <p>
                <input type='text' value={title} onChange={(e) =>
                    settodo({
                        //spead kore rekhe dite hobe amar title ar value ba description ar value ta, jate akta change korle onno ta jate na cole jay
                        ...todo,
                        title: e.target.value,
                    })
                }
                />
            </p>
            <p>
                <textarea name='todo' value={description} onChange={(e) =>
                    settodo({
                        ...todo,
                        description: e.target.value,
                    })
                } />
            </p>
            {/* <hr />
            <h2>{warning || "Good Choice!"}</h2> */}
        </div>
    );

}

export default todo;