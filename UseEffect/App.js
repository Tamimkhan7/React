// import React from 'react';
// // import mycomponent from './Component/MycomponentClass';
// import mycomponent from './Component/Mycomponent';

// export default class App extends React.Component {
//     render() {
//         return (
//             <div className='app'>
//                 {/* <div>We shall learn useEffect() today</div> */}
//                 {/* calling mycomponetclass file for the running */}
//                 <mycomponent />
//             </div >
//         );
//     }
// }


import React from 'react';
import { useState } from 'react';
// import mycomponent from './Component/MycomponentClass';
import mycomponent from './Component/Mycomponent';

export default function App() {
    const [show, setShow] = useState(true);

    return (
        <div className='app'>
            <div>{show && <mycomponent />}</div>
            <p>
                <button type='button' onClick={() => setShow((preShow) => !preShow)}>{show ? 'Hide post' : 'show Post'}</button>
            </p>
            <mycomponent />
        </div >
    );

}