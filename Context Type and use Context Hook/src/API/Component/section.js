import React from "react";
import content from "./content";

// i will be change functional method from class structur 
// export default function section() {
//     return (
//         <div>
//             <h1>This is a section</h1>
//             <content />
//         </div>
//     );
// }

// shouldComponentUpdate(nextProps, nextState) {
//     return true;
// }


export default class section extends React.Component {

    shouldComponentUpdate() {
        return false;
    }
    
    render() {
        return (
            <div>
                <h1>This is a section</h1>
                <content />
            </div>
        );
    }
}