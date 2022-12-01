import "./Header.css";
import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className="headerDiv">
            <h1>Super Carlist</h1>
            <Link className="homeLinkHeader" to={`/`}>Home</Link>
        </div>);
}

export default Header;