import ReadMore from "../components/button/ReadMore";
import Navigation from "../components/navigation/Navigation";
import { Link } from "react-router-dom";
import homepagebg from "../assets/img/homepagebg.jpg";

const Homepage = () => {
    return (<div>
        <header className="homepageHeader">
            <Navigation />
        </header>
        <main className="homepageMain">
            <h2>Welcome to my simple blog</h2>
            <Link to={`/blog/`}><ReadMore /></Link>
        </main>
    </div>);
}

export default Homepage;