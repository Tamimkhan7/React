// there are use multime time of propos and could be work fine
import { useQuery } from "react-query";
import getQuote from "./getQuote";

export default function Quote({ quotes }) {
    // quote amar previos datar id gula memorization kore rekhe ditece and next sei gula use kortece bar bar se API ke call dey na, just ak bar call dey, and joto bar call hok na keno, se oi same result tai provide kore
    const { data } = useQuery("quote", () => getQuote()); //this is useQuery hook

    return (
        <div>
            <h1>Get quotes using fetch API</h1>
            <div>{data?.content}</div>
        </div>
    );
}  