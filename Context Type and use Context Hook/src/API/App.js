import React from "react";
import ClickCounter from "./Component/ClickCounter";
// import HoverCounter from "./Component/HoverCounter";
// import user from "./Component/user";
import counter from "./Component/Counter";
import section from './Component/section';
import ThemeContext from "./context/themecontext";//i will be find there provider and consume value and i store the value in the app provider function



export default class app extends React.Component {

    state = {
        theme: 'dark',
        switchTheme: () => {
            this.setState(({ theme }) => {
                if (theme === 'dark') {
                    return {
                        theme: 'light',
                    }
                } else {
                    return {
                        theme: 'dark',
                    };
                }
            });
        },
    };

    // jehetu ami update korte cai amar theme ar value ta tahole akta change function lagbe



    render() {
        // const { theme } = this.state; //destractor kore nilam
        return (
            <div className="app" >

                <counter>
                    {(counter, incrementCount) => (
                        <ClickCounter count={counter} incrementCount={incrementCount} />
                    )}
                </counter>


                {/* i will be provided the value into the prodiver function */}
                {/* value first second brackt for dynamic value and second second brackt for theme value */}

                {/* amar aita jokhn excution hobe vitorer sob function excution hobe, aita stop korar jonno amra value ta object akare na pathiye state akare pathai, tokhn amar referance soho o sob mone rakhbe se khette value change na hole bolbe value change hoy na*/}
                <ThemeContext.provider value={this.state}>
                    <section />
                </ThemeContext.provider>
            </div>
        );
    }
}

