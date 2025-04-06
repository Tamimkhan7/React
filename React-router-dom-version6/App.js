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
                <Route path="/" >
                    <Navigate to="/hello" />
                </Route >
                <Route path="/hello" element={<hello />} />
                <Route path="/posts" element={<Posts />} />
                <Route path="/posts/:postId" element={<Post />} />

            </Routes>
        </div>
    );
}


export default App;