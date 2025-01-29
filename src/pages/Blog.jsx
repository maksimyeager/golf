import { Link } from "react-router-dom";
import { FaCalendar } from "react-icons/fa";

const Blog = () => {
    return (
        <div className="blog">
            <div className="container">
                <div className="blog__block">
                    <div className="blog__image"></div>
                    <div className="blog__info">
                        <div className="blog__info-top">
                            <h2>Blog 1</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis..
                            </p>
                        </div>
                        <div className="blog__info-bottom">
                            <p className="data">
                                <FaCalendar /> <span>Thur 17 Nov 2022</span>
                            </p>

                            <Link to={"/blog-page"} className="link-1">
                                See More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="blog__block">
                    <div className="blog__image"></div>
                    <div className="blog__info">
                        <div className="blog__info-top">
                            <h2>Blog 1</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis..
                            </p>
                        </div>
                        <div className="blog__info-bottom">
                            <p className="data">
                                <FaCalendar /> <span>Thur 17 Nov 2022</span>
                            </p>

                            <Link to={"/blog-page"} className="link-1">
                                See More
                            </Link>
                        </div>
                    </div>
                </div>
                <div className="blog__block">
                    <div className="blog__image"></div>
                    <div className="blog__info">
                        <div className="blog__info-top">
                            <h2>Blog 1</h2>
                            <p>
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis..
                            </p>
                        </div>
                        <div className="blog__info-bottom">
                            <p className="data">
                                <FaCalendar /> <span>Thur 17 Nov 2022</span>
                            </p>
                            <Link to={"/blog-page"} className="link-1">
                                See More
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;
