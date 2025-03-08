import ClickCounter from "./Component/ClickCounter";
// import HoverCounter from "./Component/HoverCounter";
// import user from "./Component/user";
import counter from "./Component/Counter";
import section from './Component/section';

function app() {
    return (
        <div className="app">

            <counter>
                {(counter, incrementCount) => (
                    <ClickCounter count={counter} incrementCount={incrementCount} />
                )}
            </counter>
            <section />

        </div>
    );
}

export default app;  