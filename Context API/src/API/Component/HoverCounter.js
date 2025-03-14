import React from "react";

export default function HoverCounter({ count, incrementcount, theme }) {
    //if my theme is dark that time i change my background theme otherwise i don't change anything
    const style = (theme === 'dark') ? {
        backgrounColor: '#000000',
        color: '#ffffff'
    } : null;

    return (
        <div>
            <h1 onMouseOver={incrementcount} style={style} >Hovered {count} Times</h1>
        </div>
    );
} 