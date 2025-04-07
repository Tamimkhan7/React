import { Outlet } from "react-router-dom";

export default function Hello() {
    return (
        <div>
            <h1>Hello</h1>
            <p>This is the home page</p>
            {/* this is called nasted route, but update version didn't work to the approach */}
            {/* <Route path="/hello/world">
                <p>This is World!</p>
            </Route> */}
            {/* update version a ai vabe rape kore dite hoy, tahole thik vabe kaj kore */}
            {/* <Routes> */}
            {/* amra agei hello modde cole asci akhn just world path bole dile ai path a cole jabo */}

            {/* </Routes> */}
            {/* where i'm print the child component value, that's call outlet */}
            <Outlet />

        </div>
    );
}