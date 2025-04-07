import { Route, Routes } from "react-router-dom";
import Dashboard from "./components/Dashboard";
import Header from "./components/Header";
import Homepage from "./components/Homepage";
import PrivateRoute from "./components/PrivateRoute";
import Login from "./Login";
import PrivateOutlet from "./PrivateOutlet";

function App() {
    return (
        <div className="App">
            <Header />
            <Routes>
                <Route path="/" element={<Homepage />} />
                <Route path="/login" element={<Login />} />

                {/* PrivateRoute diye ami basically warp kore dici jate ami aitar children ja ace oita easily access korte pari */}
                {/* directly route ke PrivateRoute diye warp kora possible na, but amra onno way ke korte pari, basically child value ta PrivateRoute diye warp korte pari */}
                {/* <Route path="/dashboard" element={<PrivateRoute><Dashboard /></PrivateRoute>} /> */}
                {/* now we can use another approach, and also this is called nasted route */}
                <Route path="/*" elemente={<PrivateOutlet />}>
                    <Route path="dashboard" element={<Dashboard title="Dashboard" />} />
                </Route>
            </Routes>
        </div >
    );
}