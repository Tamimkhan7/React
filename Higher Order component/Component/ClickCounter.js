import React from "react";

class ClickCounter extends React.Component {
    state = {
        count: 0,
    };
    // now i'm update the count value and increment of the value one by one
    incrementcount = () => {
        // for updating value we can use setState
        this.setState((prevstate) => ({ count: prevstate.count + 1 }));
    }
    render() {
        // destructure of the count value for used update the count value
        const { count } = this.state;

        return (
            <div>
                {/* used onclick function for hit the increment funciton and read the updated value */}
                <button type="button" onClick={this.incrementcount}>Click {count}</button>
            </div>
        );
    }
}

export default ClickCounter;