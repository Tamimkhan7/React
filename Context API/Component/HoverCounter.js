import React from "react";

export default function HoverCounter(count, incrementcount) {

    return (
        <div>
            <h1 onMouseOver={incrementcount}>Hovered {count} Times</h1>
        </div>
    );
}