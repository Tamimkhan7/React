import React from "react";

export default function HoverCounter({ count, incrementcount, theme, switchTheme }) {
    //if my theme is dark that time i change my background theme otherwise i don't change anything
    const style = (theme === 'dark') ? {
        backgrounColor: '#000000',
        color: '#ffffff'
    } : null;

    console.log("Hovercount Render"); //for checking

    return (
        <div>
            <h1 onMouseOver={incrementcount} style={style} >Hovered {count} Times</h1>
            <button type="button" onClick={switchTheme}>Change Theme</button>
        </div>
    );
}    