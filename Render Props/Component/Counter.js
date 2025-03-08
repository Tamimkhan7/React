import React from "react";

// how to wirte a class component

class counter extends React.Component {
    state = {
        count: 0,
    };

    incrementCount = () => {
        this, this.setState((prevState) => ({ count: prevState.count + 1 }));
    };


    render() {

        // we know that if we prodive a value use counter function then we will find the value of the props children

        const { children } = this.props;
        const { count } = this.state;

        return children(count, this.incrementCount);
    }
}

export default counter;