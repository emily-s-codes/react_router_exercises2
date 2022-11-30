import ReadMore from "../components/button/ReadMore";
import Navigation from "../components/navigation/Navigation";

const Homepage = () => {
    return (<div>
        <header className="homepageHeader">
            <Navigation />
        </header>
        <main className="homepageMain">
            <h2>Welcome to my simple blog</h2>
            <ReadMore />
        </main>
    </div>);
}

export default Homepage;