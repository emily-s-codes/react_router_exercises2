import "./Blog.css"
import Navigation from "../../components/navigation/Navigation";
// import { useParams } from "react-router-dom";
// import blogData from "./data.json"
// import ReadMore from "../../components/button/ReadMore";
import BlogArticle from "../../components/blogArticleCard/BlogArticleCard";
import blogArticles from "./data.json";

const Blog = () => {
    return (<div>
        <Navigation />
        <section className="blogPageSection">
            {blogArticles.map((article) => {
                return <BlogArticle id={article.id} title={article.title} imgUrl={article.img_url} />
            })}
        </section>
    </div>);
}

export default Blog;