import { NavLink } from "react-router-dom";
import classes from '../styles/Header.module.css';

export default function Header() {
    return (
        <div>
            <ul>
                <li>
                    {/* we can use link or we can use Navlink,, why we can use Navlink, just use for we doing styling this path*/}
                    {/* If the function className is used, the link's active state is passed as a parameter. This is helpful if you want to exclusively apply a className to an inactive link */}
                    <NavLink to="/hello" className={(navInfo) => (navInfo.isActive ? classes.active : "")} >
                        Home
                    </NavLink>
                </li> 

                <li>
                    <NavLink to="/posts" className={(navInfo) => (navInfo.isActive ? classes.active : "")}>
                        Posts
                    </NavLink>
                </li>
            </ul>
        </div>
    );
}
