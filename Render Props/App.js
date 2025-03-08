import ClickCounter from "./Component/ClickCounter";
import HoverCounter from "./Component/HoverCounter";
// import user from "./Component/user";
import counter from "./Component/Counter";

function app() {
    return (
        <div className="app">
            {/* <user name="Tamim khan Learning React From Learn with Sumit" /> */}
            {/* we will be sent it as a function, function will be receive my props because function and object will be same and my props will be receive that dont' worry  */}
            {/* <user name={() => "Tamim khan Learning React From Learn with Sumit"} /> */}
            {/* now akhn amar props ta ka jodi onno funciton ar kace aita power diye dey tahole oi file ja dibe tai ami print korbo */}
            {/* <user render={(isLoggedIn) => (isLoggedIn ? 'Tamim khan' : 'Guest')} /> */}

            {/* aita just call korar moto but higher oder akta method use kore bebhar korteci */}


            {/* is more easy and structural */}

            {/* <counter render={(counter, incrementCount) => (
                <ClickCounter count={counter} incrementCount={incrementCount} />
            )} /> */}

            <counter>
                {(counter, incrementCount) => (
                    <ClickCounter count={counter} incrementCount={incrementCount} />
                )}
            </counter>

            {/* <counter render={(counter, incrementCount) => (
                <HoverCounter count={counter} incrementCount={incrementCount} />
            )} /> */}


            <counter>
                {(counter, incrementCount) => (
                    <HoverCounter count={counter} incrementCount={incrementCount} />
                )}
            </counter>

        </div>
    );
}
export default app;  