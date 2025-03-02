import { FaCalendar } from "react-icons/fa";
import { IoIosShareAlt } from "react-icons/io";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import { client, urlFor } from "../../sanity";

const BlogPage = () => {
    const { id } = useParams();
    const [loading, setLoading] = useState(true);
    const [blog, setBlog] = useState();

    useEffect(() => {
        if (!id) return;
        client
            .fetch(
                `*[_type == "blogPost" && slug.current == $id][0]{
                    title, 
                    image,
                    price,
                    date, 
                    description, 
                    secondaryImage,
                    secondaryDescription,
                    slug,
                }`,
                { id }
            )
            .then((data) => {
                setBlog(data);
                setLoading(false);
            })
            .catch(console.error);
    }, [id]);

    const handleShare = async () => {
        if (navigator.share) {
            try {
                await navigator.share({
                    url: window.location.href,
                });
                console.log("Успешно поделились!");
            } catch (error) {
                console.log("Ошибка при попытке поделиться:", error);
            }
        } else {
            alert("Ваш браузер не поддерживает функцию поделиться.");
        }
    };

    return (
        <div className="blog-page">
            {!loading && (
                <div className="container">
                    <div className="blog-page__top">
                        <div className="blog-page__image">
                            <img
                                src={
                                    blog.image ? urlFor(blog.image).url() : null
                                }
                                alt={blog.title}
                            />
                        </div>
                        <div className="blog__page__info">
                            <div className="blog-page__info-top">
                                <h2>{blog.title}</h2>
                                <div className="blog-page__settings">
                                    <p className="data">
                                        <FaCalendar />{" "}
                                        <span>
                                            {new Date(
                                                blog.date
                                            ).toLocaleDateString()}
                                        </span>
                                    </p>
                                    <button
                                        onClick={handleShare}
                                        className="share-button"
                                    >
                                        <IoIosShareAlt color="#fff" />
                                    </button>
                                </div>
                            </div>
                            <div className="blog-page__info-bottom">
                                <p>{blog.description}</p>
                            </div>
                        </div>
                    </div>
                    <div className="blog-page__bottom">
                        <p>{blog.secondaryDescription}</p>
                        <div className="blog-page__image">
                            <img
                                src={
                                    blog.secondaryImage
                                        ? urlFor(blog.image).url()
                                        : null
                                }
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default BlogPage;
