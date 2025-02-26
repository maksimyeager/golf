import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";
import { client, urlFor } from "../../sanity";
import { useState, useEffect } from "react";

const Blog = () => {
    const [blogs, setBlogs] = useState([]);

    useEffect(() => {
        // Получаем данные из Sanity
        client
            .fetch('*[_type == "blogPost"]{title, image, date, description}')
            .then((data) => {
                setBlogs(data);
                console.log(blogs); // Сохраняем данные в состояние
            });
    }, []);

    return (
        <div className="blog">
            <div className="container">
                {blogs.map((blog, index) => {
                    // Параметры для работы с изображением
                    const imageUrl = blog.image
                        ? urlFor(blog.image).url()
                        : null; // Получаем URL изображения

                    return (
                        <div key={index} className="blog__block">
                            <div className="blog__image">
                                {/* Выводим изображение, если оно есть */}
                                {imageUrl && (
                                    <img src={imageUrl} alt={blog.title} />
                                )}
                            </div>
                            <div className="blog__info">
                                <div className="blog__info-top">
                                    <h2>{blog.title}</h2>
                                    <p>
                                        {blog.description.slice(0, 150) + "..."}
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

                                    <Link to={"/blog-page"} className="link-1">
                                        See More
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
