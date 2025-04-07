import { NavLink } from "react-router-dom";
import Classes from "../styles/Header.module.css";

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    <NavLink to="/" activeClassName={Classes.active}>
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink to="/dashboard" activeClassName={Classes.active}>
                        Dashboard
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}