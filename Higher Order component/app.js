import ClickCounter from "./Component/ClickCounter";
import HoverCounter from "./Component/HoverCounter";

function app() {
    return (
        <div className="app">
            {/* both applicaiton we will be open here, both application are work here smoothly */}
            <ClickCounter />
            <HoverCounter />
        </div>
    );
}
export default app;