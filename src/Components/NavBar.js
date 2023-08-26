import { NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
    return (
        <nav id="navbar">
            <div id="header"></div>
            <NavLink classname="navigation-bar" to="./">Robot Collection</NavLink>
            <NavLink classname="navigation-bar" to="./myarmy">Bot Army</NavLink>
        </nav>
    )
}
export default NavBar;