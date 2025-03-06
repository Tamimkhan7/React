// i'm used of the emoji parent file in the functional way

export default function text({ addemoji, addBracket }) {
    let text = 'I am Javascript Programming Language';
    if (addemoji) text = addemoji(text, '😊');
    else if (addBracket) text = addBracket(text);
    return <div> text</div>
}