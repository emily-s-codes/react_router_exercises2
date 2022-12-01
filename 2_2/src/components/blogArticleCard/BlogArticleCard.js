import "./BlogArticleCard.css";
import ReadMore from "../button/ReadMore";
// import { useParams } from "react-router-dom";
// import blogArticles from "../../pages/blog/data.json";
import { Link } from "react-router-dom";

const BlogArticle = (props) => {
    return (<div className="individualPostCard">
        <img src={props.imgUrl} alt="blog post image"></img>
        <h2>{props.title}</h2>
        <Link to={`/blog/${props.id}`}><ReadMore /></Link>
    </div >);
}

export default BlogArticle;