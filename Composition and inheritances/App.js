// import text from "./Component/Inheritances/text";

// function App() {
//     return <text />
// }

// export default App;

// import Emoji from "./Component/composition/Emoji";
// import text from "./Component/Inheritances/text";
// import Bracket from "./Component/composition/Bracket";

// function App() {
//     return (
//         <Emoji>
//             {({ addEmoji }) => <text addEmoji={addEmoji} />}
//         </Emoji>
//     );
// }

// export default App;

// for nested class 

import Emoji from "./Component/composition/Emoji";
import text from "./Component/Inheritances/text";
import Bracket from "./Component/composition/Bracket";

function App() {
    return (
        <Emoji>
            {({ addEmoji }) => (
                <Bracket>
                    {({ addBracket }) => <text addEmoji={addEmoji} addBracket={addBracket} />}
                </Bracket>
            )}
        </Emoji>
    );
}

export default App;