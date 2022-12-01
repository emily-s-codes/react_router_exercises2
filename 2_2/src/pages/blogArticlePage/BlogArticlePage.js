import "./BlogArticlePage.css";
import Navigation from "../../components/navigation/Navigation";
import { useParams } from "react-router-dom";
import blogData from "../blog/data.json"

const BlogArticlePage = () => {
    const params = useParams();
    console.log(params)

    const blogDetailData = blogData[params.id];

    return (
        <section className="blogArticlePage">
            <Navigation />
            <img src={blogDetailData.img_url} alt="blog post image" />
            <section className="blogArticleContentSection">
                <div className="blogDetailTitleBanner">
                    <h2>{blogDetailData.title}</h2>
                    <p>{blogDetailData.published_date}</p>
                </div>
                <p className="blogArticleContent">{blogDetailData.description}</p>
                <p className="blogArticleAuthor">By {blogDetailData.author}</p>
            </section>
        </section>
    );
}

export default BlogArticlePage;