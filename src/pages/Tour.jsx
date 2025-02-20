import Banner from "../components/Banner";
import bannerImg from "../assets/banner/tour.jpeg";
import { Link } from "react-router-dom";
import { HiMapPin } from "react-icons/hi2";
import image1 from "../assets/image-1.jpeg";

const Tour = () => {
    return (
        <div>
            <Banner title={"Tour"} imageUrl={bannerImg} />
            <section className="section">
                <div className="container">
                    <div className="offers__wrapper">
                        <div className="offers__block">
                            <Link to={"/offer"}>
                                <div className="offers__img">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="offers__info">
                                    <div className="offers__data">
                                        <div className="offers__title">
                                            Special Offer 1
                                        </div>
                                        <div className="address">
                                            <HiMapPin size={18} />
                                            City, Address
                                        </div>
                                    </div>
                                    <div className="offers__price">£1849</div>
                                </div>
                            </Link>
                        </div>
                        <div className="offers__block">
                            <Link to={"/offer"}>
                                <div className="offers__img">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="offers__info">
                                    <div className="offers__data">
                                        <div className="offers__title">
                                            Special Offer 1
                                        </div>
                                        <div className="address">
                                            <HiMapPin size={18} />
                                            City, Address
                                        </div>
                                    </div>
                                    <div className="offers__price">£1849</div>
                                </div>
                            </Link>
                        </div>
                        <div className="offers__block">
                            <Link to={"/offer"}>
                                <div className="offers__img">
                                    <img src={image1} alt="" />
                                </div>
                                <div className="offers__info">
                                    <div className="offers__data">
                                        <div className="offers__title">
                                            Special Offer 1
                                        </div>
                                        <div className="address">
                                            <HiMapPin size={18} />
                                            City, Address
                                        </div>
                                    </div>
                                    <div className="offers__price">£1849</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Tour;
