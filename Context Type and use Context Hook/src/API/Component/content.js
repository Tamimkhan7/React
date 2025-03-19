import counter from "./counter";
import HoverCounter from "./HoverCounter";
import ThemeContext from "./context/themecontext";
import React from "react";
import { useContext } from "react"; //aita react ar akta special function ai vabe kono function ar value ke ana jay and kothayoh store kora jay

// function a kivabe amar oi bahire ar value ta access korte parbo sob jayga theke, ta korar jonno akta function hook ace
export default function content() {
    const context = useContext(ThemeContext); //usecontext method call kore ami themecontext ar value ta niye asci
    const { theme, switchTheme } = context;

    console.log("content Render");//for checking

    return (
        <div>
            <h1>This is a content</h1>
            <counter>
                {(counter, incrementCount) => {
                    <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
                }}
            </counter>
        </div>
    );
}


// class ar khette ai vabe kora jay

// export default class content extends React.Component {

//     // now context ar value ke je kono jayga theke excuted korte parteci

//     componentDidMount() {
//         console.log(this.context);
//     }
//     // this value outside the function will not find, that's we have search another solution, and react has given one good solution   
//     render() {
//         // now destructar the context value

//         const { theme, switchTheme } = this.context;

//         return (
//             <div>
//                 <h1>This is a content</h1>
//                 <counter>
//                     {/* akhn ar available na kono kicu */}
//                     {(counter, incrementCount) => (
//                         <HoverCounter count={counter} incrementCount={incrementCount} theme={theme} switchTheme={switchTheme} />
//                     )}
//                 </counter>
//             </div >
//         );
//     }
// }

// //ai function ar modde diye ami oi value ta available korte parbo, akhn je kono jaygay ami oi value ta use korte parbo

// content.contextType = ThemeContext;