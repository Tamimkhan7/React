import React from "react";

// export default class HoverCounter extends React.Component {

//     render() {
//         const { count, incrementcount } = props;

//         return (
//             <div>
//                 <h1 onMouseOver={incrementcount}>Hovered {count} Times</h1>
//             </div>
//         );
//     }
// }


// if we wanted more easy and structural code of the above code, now:--



export default function HoverCounter(count, incrementcount) {

    return (
        <div>
            <h1 onMouseOver={incrementcount}>Hovered {count} Times</h1>
        </div>
    );
}