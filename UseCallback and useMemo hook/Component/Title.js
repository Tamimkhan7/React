import React from "react";

function Title() {
    console.log('rendering title...');

    return <h2>Usecallback Hook tutorial</h2>
}
// this should be maintain higher order and also reduces time
export default React.memo(Title);