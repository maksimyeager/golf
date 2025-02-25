import Banner from "../components/Banner";
import bannerImg from "../assets/banner/offers.png";
import offer1 from "../assets/offers/offer-1.jpeg";
import offer2 from "../assets/offers/offer-2.jpeg";
import offer3 from "../assets/offers/offer-3.jpeg";
import { HiMapPin } from "react-icons/hi2";
import { Link } from "react-router-dom";

const Offers = () => {
    return (
        <>
            <Banner title={"Offers"} imageUrl={bannerImg} />
            <section className="section">
                <div className="container">
                    <div className="offers__wrapper">
                        <div className="offers__block">
                            <Link to={"/offer"}>
                                <div className="offers__img">
                                    <img src={offer1} alt="" />
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
                                    <img src={offer2} alt="" />
                                </div>
                                <div className="offers__info">
                                    <div className="offers__data">
                                        <div className="offers__title">
                                            Special Offer 2
                                        </div>
                                        <div className="address">
                                            <HiMapPin size={18} />
                                            City, Address
                                        </div>
                                    </div>
                                    <div className="offers__price">£1910</div>
                                </div>
                            </Link>
                        </div>
                        <div className="offers__block">
                            <Link to={"/offer"}>
                                <div className="offers__img">
                                    <img src={offer3} alt="" />
                                </div>
                                <div className="offers__info">
                                    <div className="offers__data">
                                        <div className="offers__title">
                                            Special Offer 3
                                        </div>
                                        <div className="address">
                                            <HiMapPin size={18} />
                                            City, Address
                                        </div>
                                    </div>
                                    <div className="offers__price">£1730</div>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Offers;
