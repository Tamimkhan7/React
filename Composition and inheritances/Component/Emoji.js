import React from "react"; //jodi amar kono file class component hoy tahole amake react re import korte hobe

//i have a create a emoji class 

export default class emoji extends React.Component {
    //create a normal class for editing emoji
    addemoji = (text, emoji) => `${emoji} ${text} ${emoji}`;
 
    render(override) {
        let text = "I am the emoji component";
        //jodi amar child class ar text ta change hoye jay tahole oita use korte hobe otherwise ami amar parent class a value niye kaj korte parbo
        if (override) text = override;

        return <div>{text}</div>
    }
}