import React from "react";

class HoverCounter extends React.Component {
    state = {
        count: 0,
    };
    incrementcount = () => {
        this.setState((prevstate) => ({ count: prevstate.count + 1 }));
    }
    render() {
        const { count } = this.state;
        return (
            <div>
                {/* how much time we would hover this structure */}
                <h1 type="hover" onMouseOver={this.incrementcount}>Hover {count} Time</h1>
            </div>
        );
    }
}

export default HoverCounter;