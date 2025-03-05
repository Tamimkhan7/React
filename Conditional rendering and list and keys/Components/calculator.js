import React from "react";
import boilingverdict from "./boilingverdict";
import { convert, tocelsius, tofahrenheit } from "../lib/convertor";
import temperatureInput from "./temperatureInput";

export default class calculator extends React.Component {

    handleChange = (e, scale) => {
        this.setState({
            temperature: e.target.value,
            scale,
        });
    };

    render() {
        const { temperature, scale } = this.scale;
        const celcius = scale === 'F' ? convert(temperature, tocelsius) : temperature;
        const Fehrenhite = scale === 'C' ? convert(temperature, tofahrenheit) : temperature;
        return (

            <div>
                <temperatureInput scale="c" temperature={celcius} ontemperaturechange={this.handleChange} />
                <temperatureInput scale="f" temperature={Fehrenhite} ontemperaturechange={this.handleChange} />
                <boilingverdict celsius={parseFloat(temperature)} />
            </div>
        );
    }
}
//parent  class of the boilingverdic class 

