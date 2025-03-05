export function tocelsius(fahrenheit) {
    return ((fahrenheit - 32) * 5) / 9;
}

export function tofahrenheit(celsius) {
    return (celsius * 9 / 5) + 32;
}

export function convert(temperature, convertTO) {
    const input = parseFloat(temperature); //convert the value into the float
    if (Number.isNaN(input)) return ''; //check if is it a number or something, if it is not a number we will return a empty string
    const output = convertTO(input);
    const rounded = Math.round(output * 1000) / 1000; //value rounded after three digit
    return rounded.toString();//rounded value return by the tostring method use
}