export default function boilingverdict({ celcius = 0 }) {
    if (celcius > 100) return <p>The water would boil.</p>;
    else return <p>Water would not boil.</p>;
}