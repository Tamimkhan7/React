import React from "react";

export default function ClickCounter({ count, incrementcount }) {
    return (
        <div>
            <button type="button" onClick={incrementcount}>Click {count} Times</button>
        </div>
    );
}

