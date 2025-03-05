import React from "react";
import boilingverdict from "./boilingverdict";
import temperatureInput from "./temperatureInput";

export default class calculator extends React.Component {


    render() {

        return (

            <div>
                <temperatureInput scale="c" />
                <temperatureInput scale="f" />
                {/* <boilingverdict celsius={parseFloat( temperature)} /> */}
            </div>
        );
    }
}
//parent  class of the boilingverdic class 