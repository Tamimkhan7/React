import React from 'react';
import reportwebvitals from './reportwebvitals';
import App from './App';

ReactDOM.render(
    <React.StrictMode>
        <App />
    </React.StrictMode>,
    document.getElementById('root')
);

reportwebvitals();


// below this is, i'm am creating meanually usestate, this is work fine

/*import React from 'react';
import ReactDOM from 'react-dom';

// import reportwebvitals from './reportwebvitals';
// import App from './App';

// we create a useState for us, how to work more effictive and more easier

let states = []; //karon protita state ar modde value gula abar array akare thake
let stateindex = -1; //for indexing
function useState(defaultvalue) {

    const index = ++stateindex;
    //if state[index] value already assign, that's don't move next step and return the current state[index] value
    if (states[index]) return states[index];

    const setvalue = (newvalue) => {
        states[index][0] = newvalue;
        renderwithtamim();
    }

    const reutnarray = [defaultvalue, setvalue];
    states[index] = reutnarray;
    return reutnarray;
}

function App() {


    const [todo, settodo] = useState('');
    const [warning, setwarning] = useState(null);


    const handleInput = (e) => {
        const inputvalue = e.target.value;
        const uqdatewarning = inputvalue.includes('.js') ? 'You need javascript skill to complete the task. Do you have it?' : null;

        settodo(inputvalue);
        setwarning(uqdatewarning);
    };

    return (
        <div>
            <p>{todo}</p>
            <p>
                <textarea name='todo' value={todo} onChange={handleInput} />
            </p>
            <hr />
            <h2>{warning || "Good Choice!"}</h2>
        </div>
    );

}

function renderwithtamim() {
    stateindex = -1;
    ReactDOM.render(
        <App />,
        document.getElementById('root')
    );
}

renderwithtamim();



// reportwebvitals();*/