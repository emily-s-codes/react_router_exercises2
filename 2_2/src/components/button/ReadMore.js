import "./ReadMore.css";
import { NavLink } from "react-router-dom";

const ReadMore = () => {
    return (
        <NavLink to="/blog" activeClassName="current" exact>
            <button type="button" className="readMoreButton" >Read more</button>
        </NavLink>);
}

export default ReadMore; 