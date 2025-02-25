import Banner from "../components/Banner";
import bannerImg from "../assets/banner/tours.jpeg";
import { FaPhoneAlt } from "react-icons/fa";
import { Link } from "react-router-dom";
import offer1 from "../assets/offers/offer-1.jpeg";
import offer2 from "../assets/offers/offer-2.jpeg";
import offer3 from "../assets/offers/offer-3.jpeg";
import { HiMapPin } from "react-icons/hi2";

const GroupTours = () => {
    return (
        <>
            <Banner title={"Group Tours"} imageUrl={bannerImg} />
            <div className="group-tours">
                <div className="container">
                    <div className="group-tours__wrapper">
                        <div className="group-tours__info">
                            <h2 className="group-tours__title">
                                Why Book Your Golf Group with Us?
                            </h2>
                            <p className="group-tours__subtitle">
                                Golfers heading out on their next golf holiday
                                or break with a group or society will be well
                                versed to consult Your Golf Travel. Our team is
                                made up of dedicated, some may even say
                                obsessed, golfers. As a result of working for a
                                golf travel company, the responsibility of
                                organising our own societies and groups lands at
                                our door.
                            </p>
                            <p className="group-tours__subtitle">
                                So, you'll get the very best advice for where to
                                go from both our personal and professional
                                experience!
                            </p>
                        </div>
                        <div className="group-tours__contacts">
                            <div className="group-tours__contacts-info">
                                <div className="group-tours__number">
                                    050 545 56 85
                                </div>
                                <div className="group-tours__email">
                                    info@golf-verve.com
                                </div>
                                <div className="group-tours__contacts-desc">
                                    Contact us
                                </div>
                            </div>
                            <div className="group-tours__contacts-img">
                                <FaPhoneAlt fontSize={40} />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
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
export default GroupTours;
