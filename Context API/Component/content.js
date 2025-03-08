import counter from "./counter";
import HoverCounter from "./HoverCounter";

export default function context() {
    return (
        <div>
            <h1>This is a context</h1>
            <counter>
                {(counter, incrementCount) => (
                    <HoverCounter count={counter} incrementCount={incrementCount} />
                )}
            </counter>
        </div>
    );
}