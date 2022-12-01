import "./SingleCar.css"
import { useParams } from "react-router-dom";
import carData from "../data.json"
import Header from "../header/Header";

const SingleCar = () => {
    const params = useParams();
    const carDetailData = carData[params.id];

    return (
        <section className="singleCarPage">
            <Header />
            <div className="singleCarPageDiv">
                <h1>{carDetailData.carModel}</h1>
                <h2>{carDetailData.CarMake}</h2>
                <p>{carDetailData.CarYear}</p>
            </div>
        </section>
    );
}

export default SingleCar;