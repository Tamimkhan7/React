import React from "react";

const scaleNames = {
    c: 'Celsius',
    F: 'fahrenheit',
}

export default class temperatureInput extends React.Component {
    state = {
        //   initial state temperature value is empty
        temperature: '',
    };

    ontemperaturechange = (e) => {
        this.setState({
            temperature: e.target.value,
        });
    };

    render() {
        //temperature value destructure 
        const { temperature } = this.state;
        const { scale } = this.props;
        return (
            // The < fieldset > tag is used to group related elements in a form.
            // The < fieldset > tag draws a box around the related elements.
            <div>
                <fieldset>
                    {/* The <legend> tag defines a caption for the <fieldset> element. */}

                    <legend>Enter temperature in {scaleNames[scale]}: </legend>
                    <input type="text" value={temperature} onChange={this.ontemperaturechange} />
                </fieldset>

            </div>
        );
    }
}