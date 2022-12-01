import "./Homepage.css";
import CarCard from "../components/carCard/CarCard";
import carData from "../components/data.json";
import Header from "../components/header/Header";

const Homepage = () => {
    return (
        <section className="HomepageSection">
            <Header />
            <section className="homepageCarsSection">
                {carData.map((car) => {
                    return <CarCard key={car.id} CarMake={car.CarMake} id={car.id} />
                })}
            </section>
        </section>
    );
}

export default Homepage;