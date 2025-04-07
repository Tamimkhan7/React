import useSWR from "swr";

const fetcher = async (...args) => {
    const res = await fetch(...args);
    const data = await res.json();
    return data;
};


export default function Quote() {
    // SWR function ak sathe onek gule propos hold korte pare, first props API argument pathailam and second function ta call diye dilam
    const { data, error } = useSWR("http://api.quotable.io/random", fetcher, {
        suspense: false,
    });

    // console.log(data);//for testing purpose
    // if find any error they should return this h1 value don't move next line 
    if (error) return <h1>There was an error!</h1>
    return (
        <div>
            <h1>Get quotes using fetch API</h1>
            {/* if quotes.content is null there are no error otherwise show the content value */}
            {/* suspense use korar pole amar value jotokhon available na hobe totokhon ai function a asbeii na , data available hole ai function a asbe and call hobe */}
            <div>{data.content}</div>
        </div>
    );
}