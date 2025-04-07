// import Quote from "./components/Query/Quote";

// function App() {
//     return (
//         <div className="App">
//             {/*  fallback holo amar data jodi khuje na pay tokhn aita dekhabe, suspense diye warp kora holo basically jodi empty ase tahole jate kono error na ase */}
//             <Suspense fallback={<h1>Loading data.............</h1>}>
//             <Quote />
//             </Suspense>

//         </div>
//     );
// }

// export default App;

import { useState, useEffect, Suspense } from "react";
import Quote from "./components/Query/Quote";
// context API jemon child value gule ke warp kore dewa jay parent value diye temoni QueryClientProvider 
// QueryClient which is class that's store the value of the propos 
import { QueryClientProvider, QueryClient } from "react-query";
import getQuote from "./components/Query/getQuote";

function App() {
    const Client = new QueryClient({
        defaultOption: {
            queries: {
                Suspense: true,
            },
        },
    }); // client store the value from the Queryclient function

    return (
        <div className="App">
            <QueryClientProvider client={Client}>
                <Suspense fallback={<h1>Loading data...........!</h1>}>
                    <Quote />
                    <Quote />
                </Suspense>

            </QueryClientProvider>
        </div>
    );
}

export default App;