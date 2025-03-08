import React from "react";

// export default class ClickCounter extends React.Component {


//     render() {
//         const { count, incrementcount } = props;

//         return (
//             <div>
//                 <button type="button" onClick={incrementcount}>Click {count} Times</button>
//             </div>
//         );
//     }
// }


// if we wanted more easy and structural code of the above code, now:--


export default function ClickCounter({ count, incrementcount }) {
    return (
        <div>
            <button type="button" onClick={incrementcount}>Click {count} Times</button>
        </div>
    );

}

