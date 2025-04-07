import { Navigate } from "react-router-dom";
import useAuth from "../hooks/useAuth";

// full control korte parci amar onno component diye, ami konta show korbo korta korbo na
export default function PrivateRoute({ children }) {
    const auth = useAuth(); //aut ar modde useAuth component value ta cole asce, ami akhn check korte parbo, which is true or false

    return auth ? children : <Navigate to="/login" />
}   