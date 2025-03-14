import counter from "./counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./context/themecontext";

export default function context() {
    return (
        <div>
            <h1>This is a content</h1>
            <counter>
                {(counter, incrementCount) => {
                    return <ThemeContext.consumer> {({ theme }) => <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} />}</ThemeContext.consumer>
                }}
            </counter>
        </div>
    );
}