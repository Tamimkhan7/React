import React from "react"; //jodi amar kono file class component hoy tahole amake react re import korte hobe

//i have a create a emoji class 

export default class emoji extends React.Component {
    //create a normal class for editing emoji
    addemoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
    
    render() {
        const text = "I am the emoji component";
        return <div>{text}</div>
    }
}