import { Navigate, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Hello from "./components/Hello";
import Post from "./components/Post";
import Posts from "./components/Posts";

// one line close it call seft closed 
// Redirect will be change Navigate
function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                {/* this is home page, by the way this is default page of the router */}
                {/* there are no child element, there are only store the element in the parents element use element component */}
                {/* if we use * of the given path it is call default path, if any path didn't match, default going below path */}
                <Route path="/*" element={<Navigate to="/hello" />} />
                {/* why use Navigate---  Because you can return or throw responses in loaders and actions, */}

                <Route path="/hello/*" element={<hello />} >
                    {/* akhn child hisabe use korte parbo */}
                    <Route path="world" element={<p>This is World!</p>} />
                </Route>
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:postId" element={<Post />} />

            </Routes>
        </div>
    );
}


export default App;