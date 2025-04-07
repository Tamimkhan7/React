import { Navigate, outlet } from "react-router-dom";
import useAuth from "../hooks/useAuth";

export default function PrivateOutlet() {
    const auth = useAuth();

    return auth ? <outlet /> : <Navigate to="/login" />
}