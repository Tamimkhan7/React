import React from "react";

const scaleNames = {
    c: 'Celsius',
    F: 'fahrenheit',
}

export default function temperatureInput({ temperature, scale, ontemperaturechange }) {

    return (
        // The < fieldset > tag is used to group related elements in a form.
        // The < fieldset > tag draws a box around the related elements.

        <fieldset>
            {/* The <legend> tag defines a caption for the <fieldset> element. */}

            <legend>Enter temperature in {scaleNames[scale]}: </legend>
            <input type="text" value={temperature} onChange={(e) => ontemperaturechange(e, scale)} />
        </fieldset>


    );
}
