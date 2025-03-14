import React from "react";
import ClickCounter from "./Component/ClickCounter";
// import HoverCounter from "./Component/HoverCounter";
// import user from "./Component/user";
import counter from "./Component/Counter";
import section from './Component/section';
import ThemeContext from "./context/themecontext";//i will be find there provider and consume value and i store the value in the app provider function



export default class app extends React.Component {

    state = {
        theme: 'dark'
    };

    render() {
        const { theme } = this.state; //destractor kore nilam
        return (
            <div className="app" >
                <counter>
                    {(counter, incrementCount) => (
                        <ClickCounter count={counter} incrementCount={incrementCount} />
                    )}
                </counter>
                <section theme={theme} />
                {/* i will be provided the value into the prodiver function */}
                {/* value first second brackt for dynamic value and second second brackt for theme value */}
                <ThemeContext.provider value={{ theme: theme }}> <section /> </ThemeContext.provider>
            </div>
        );
    }
}

