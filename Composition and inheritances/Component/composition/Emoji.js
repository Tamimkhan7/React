import React from "react";

export default class emoji extends React.Component {

    addemoji = (text, emoji) => `${emoji} ${text} ${emoji}`;

    render() {
        // In React, this.props.children refers to whatever is placed inside this component when it is used.
        return (this.props.children({ addemoji: this.addemoji }));
    }
} 