import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import { client, urlFor } from "../../sanity";
import { useState, useEffect } from "react";
import { useTranslation } from "react-i18next";

const Blog = () => {
    const { t } = useTranslation("global");

    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        client
            .fetch(
                '*[_type == "blogPost"]{title, image, date, description, slug}'
            )
            .then((data) => {
                setBlogs(data);
                setLoading(false);
            });
    }, []);

    return (
        <div className="blog">
            <div className="container">
                {!loading &&
                    blogs.map((blog, index) => {
                        const imageUrl = blog.image
                            ? urlFor(blog.image).url()
                            : null;

                        return (
                            <div key={index} className="blog__block">
                                <div className="blog__image">
                                    {imageUrl && (
                                        <img src={imageUrl} alt={blog.title} />
                                    )}
                                </div>
                                <div className="blog__info">
                                    <div className="blog__info-top">
                                        <h2>{blog.title}</h2>
                                        <p>
                                            {blog.description.slice(0, 150) +
                                                "..."}
                                        </p>
                                    </div>
                                    <div className="blog__info-bottom">
                                        <p className="data">
                                            <FaCalendar />{" "}
                                            <span>
                                                {new Date(
                                                    blog.date
                                                ).toLocaleDateString()}
                                            </span>
                                        </p>

                                        <Link
                                            to={`/blog-page/${blog.slug.current}`}
                                            className="link-1"
                                        >
                                            {t("see-more")}
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default Blog;
