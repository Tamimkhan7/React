import { BrowserRouter as Router, Route, Switch, Redirect } from "react-router-dom";
import About from "./Component/About";
import Home from "./Component/Home";
import Service from "./Component/Service";
import Navbar from "./Component/Navbar";
import Error from "./Component/Error";
import posts from "./Component/posts";
import dashborad from "./Component/Dashborad";

export default function App() {
    const isLoggedIn = true;
    return (
        <router>
            <Navbar />
            <Switch>
                {/* exact bole diye thik oi page tai thakbe otherwise home page oh show korbe, path diye ami bole dicci amar file ar path ta,,, component diye boli dicci aita kon file ke represent korbe */}
                <Route exact path="/" Component={Home} />
                <Route exact path="/about" Component={About} />

                {/* <Route exact path="/service">
                    <Service number="10" />
                </Route> */}
                {/* ai vabe oh kaj jay */}
                <Route exact path="/service" render={() => <Service number="5" />} />
                <Route exact path="/posts/:category/:topic" Component={posts} />
                <Route exact path="/dashborad" Component={dashborad} />

                <Route exact path="/login">
                    {isLoggedIn ? <Redirect to="/dashboard" /> : <Home />}
                </Route>

        //error component must be last a thakbe
                <Route Component={Error} />
            </Switch>
        </router >
    );
}
