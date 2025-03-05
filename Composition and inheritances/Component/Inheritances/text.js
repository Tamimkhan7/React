import emoji from "../Emoji";

export default class text extends emoji {
    //kono js file ke extends korle sathe sathe oi constructor hisabe use kora jay
    constructor(props) {
        super(props);
        //jokhn ami amar inheritances call ke call korbo sathe sathe oita ke super class a call kore dite hobe
    }
    render() {
        const decoratedText = this.addemoji('I am Javascript Language', "emoji dite hobe");
    }
}