import { NavLink } from "react-router-dom";

export default function Navbar() {
    return (
        <nav>
            <ul>
                <li>
                    <NavLink exact
                        to="/"
                        // router document theke ai style ta ante pari tobe ar age hoyto link take Navlink kore nite pari
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                        }}
                    >
                        Home
                    </NavLink>
                </li>
                <li>
                    <NavLink exact
                        to="/about"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                        }}
                    >
                        About
                    </NavLink>
                </li>
                <li>
                    <NavLink exact
                        to="/services"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                        }}
                    >
                        service
                    </NavLink>
                </li>

                <li>
                    <NavLink exact
                        to="/posts/js/react"
                        activeStyle={{
                            fontWeight: "bold",
                            color: "red",
                        }}
                    >
                        React
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}
