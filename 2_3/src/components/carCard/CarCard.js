import "./CarCard.css";
import { Link } from "react-router-dom";

const CarCard = (props) => {
    return (
        <div className="singleCarDiv">
            <p className="carMake">{props.CarMake}</p>
            <Link to={`/car/${props.id}`}>More...</Link>
        </div>
    );
}

export default CarCard;