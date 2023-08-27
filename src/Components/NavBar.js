import { NavLink } from 'react-router-dom';
import './NavBar.css';
const NavBar = () => {
    return (
        <nav className="navbar">
            <div id="header"></div>
            <NavLink className="navigation-bar" to="./">Robot Collection</NavLink>
            <NavLink className="navigation-bar" to="./myarmy">Bot Army</NavLink>
        </nav>
    )
}
export default NavBar;