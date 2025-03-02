import { Link } from "react-router-dom";
import earthSvg from "../assets/icons/earth.svg";
import travelSvg from "../assets/icons/travel.svg";
import serviceSvg from "../assets/icons/service.svg";
import ourPro from "../assets/our-pro.png";
import { HiMapPin } from "react-icons/hi2";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import destination1 from "../assets/destinations/destination-1.jpg";
import destination2 from "../assets/destinations/destination-2.jpg";
import destination3 from "../assets/destinations/destination-3.jpg";
import HomeBanner from "../components/HomeBanner";
import useGetOffers from "../hooks/useGetOffers";
import { urlFor } from "../../sanity";

const Home = () => {
    const { offers, loading} = useGetOffers();
    console.log(offers);
    return (
        <>
            <div className="main-banner">
                <HomeBanner />
            </div>
            <section className="section section--subscribe">
                <div className="container">
                    <div className="subscribe__wrapper">
                        <div className="subscribe__info">
                            <h2 className="subscribe__title">Subscribe</h2>
                            <p
                                className="subscribe__subtitle"
                                style={{ maxWidth: "430px" }}
                            >
                                Stay on Par with Exclusive Golf Travel Deals!
                                <br />
                                Subscribe to our newsletter and get notified
                                about exclusive golf vacation packages and
                                special promotions.
                            </p>
                            <form action="" className="subscribe__form">
                                <input
                                    type="text"
                                    placeholder="Enter Email Address"
                                    required
                                />
                                <button>Send</button>
                            </form>
                        </div>
                        <div className="subscribe__contacts">
                            <div className="subscribe__contacts-info">
                                <div className="subscribe__number">
                                    050 545 56 85
                                </div>
                                <div className="subscribe__email">
                                    info@golf-verve.com
                                </div>
                                <div className="subscribe__contacts-desc">
                                    Contact us
                                </div>
                            </div>
                            <div className="subscribe__contacts-img">
                                <FaPhoneAlt fontSize={40} />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--offers">
                <div className="container">
                    <div className="offers__head">
                        <div className="offers__head-col">
                            <h2 className="section__title">
                                Exclusive Golf Deals
                            </h2>
                            <p
                                className="section__subtitle"
                                style={{ maxWidth: "530px" }}
                            >
                                Unlock exclusive golf getaways and limited-time
                                deals designed for passionate golfers—experience
                                world-class courses at unbeatable rates
                            </p>
                        </div>
                        <div className="offers__head-col">
                            <Link to={"/"} className="link-1">
                                See More
                            </Link>
                        </div>
                    </div>
                    <div className="offers__wrapper">
                        {!loading &&
                            offers
                                .filter(
                                    (item, index) =>
                                        index === 1 ||
                                        index === 9 ||
                                        index == 12
                                )
                                .map((item, index) => (
                                    <div className="offers__block" key={index}>
                                        <Link
                                            to={`/offer/${item.slug.current}`}
                                        >
                                            <div className="offers__img">
                                                <img
                                                    src={
                                                        item.image
                                                            ? urlFor(
                                                                  item.image
                                                              ).url()
                                                            : null
                                                    }
                                                    alt={item.title}
                                                />
                                            </div>
                                            <div className="offers__info">
                                                <div className="offers__data">
                                                    <div className="offers__title">
                                                        {item.title}
                                                    </div>
                                                    <div className="address">
                                                        <HiMapPin size={18} />
                                                        {item.location}
                                                    </div>
                                                </div>
                                                <div className="offers__price">
                                                    £{item.price}
                                                </div>
                                            </div>
                                        </Link>
                                    </div>
                                ))}
                    </div>
                </div>
            </section>
            <section className="section section--destinations">
                <div className="container">
                    <h2 className="section__title">
                        Ultimate Golf Destinations
                    </h2>
                    <p
                        className="section__subtitle"
                        style={{ maxWidth: "580px" }}
                    >
                        Explore the latest and most exciting golf destinations,
                        where newly discovered courses and fresh golf
                        experiences await passionate players.
                    </p>
                    <div className="destinations__wrapper">
                        <Link to={"/destination/azerbaijan"}>
                            <div className="destinations__block">
                                <div className="destinations__img">
                                    <img src={destination1} alt="" />
                                    <div className="destinations__img--overlay"></div>
                                </div>
                                <div className="destinations__title">
                                    Azərbaycan
                                </div>
                                <Link
                                    to={"/destination/azerbaijan"}
                                    className="destinations__link"
                                >
                                    View Destination
                                </Link>
                            </div>
                        </Link>
                        <Link to={"/destination/georgia"}>
                            <div className="destinations__block">
                                <div className="destinations__img">
                                    <img src={destination2} alt="" />
                                    <div className="destinations__img--overlay"></div>
                                </div>
                                <div className="destinations__title">
                                    Georgia
                                </div>
                                <Link
                                    to={"/destination/georgia"}
                                    className="destinations__link"
                                >
                                    View Destination
                                </Link>
                            </div>
                        </Link>
                        <Link to={"/destination/russia"}>
                            <div className="destinations__block">
                                <div className="destinations__img">
                                    <img src={destination3} alt="" />
                                    <div className="destinations__img--overlay"></div>
                                </div>
                                <div className="destinations__title">
                                    Russia
                                </div>
                                <Link
                                    to={"/destination/russia"}
                                    className="destinations__link"
                                >
                                    View Destination
                                </Link>
                            </div>
                        </Link>
                    </div>
                    <div className="destinations__settings">
                        <button>
                            <FaChevronLeft color={"#fff"} size={20} />
                        </button>
                        <Link to={"/destinations"}>View All Destinations</Link>
                        <button>
                            <FaChevronRight color={"#fff"} size={20} />
                        </button>
                    </div>
                </div>
            </section>
            <section className="section section--why">
                <div className="container">
                    <h2 className="section__title">Why Golf Verve?</h2>
                    <p className="section__subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed do eiusmod <br /> tempor incididunt ut labore et
                        dolore magna aliqua.
                    </p>
                    <div className="why-golf__wrapper">
                        <div className="why-golf__block">
                            <div className="why-golf__img">
                                <img src={earthSvg} alt="" />
                            </div>
                            <h3 className="why-golf__title">
                                Bespoke Golf <br /> Experiences
                            </h3>
                            <p className="why-golf__desc">
                                We offer the finest resorts and golf <br />
                                courses in the world and customize
                                <br /> each and every trip.
                            </p>
                        </div>
                        <div className="why-golf__block">
                            <div className="why-golf__img">
                                <img src={travelSvg} alt="" />
                            </div>
                            <h3 className="why-golf__title  why-golf__title--2">
                                98%
                            </h3>
                            <p className="why-golf__desc">
                                Of our clients would travel <br />
                                with us again
                            </p>
                        </div>
                        <div className="why-golf__block">
                            <div className="why-golf__img">
                                <img src={serviceSvg} alt="" />
                            </div>
                            <h3 className="why-golf__title">
                                Our Service <br /> Promise
                            </h3>
                            <p className="why-golf__desc">
                                We’ve been providing the absolute
                                <br /> highest level of service to our
                                <br /> golfing clientele for decades.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="section section--pro">
                <div className="container">
                    <h2 className="section__title">Meet Our Pro’s</h2>
                    <p className="section__subtitle">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                        sed <br /> do eiusmod tempor incididunt.
                    </p>
                    <div className="golf-pro__wrapper">
                        <div className="golf-pro__block">
                            <div className="golf-pro__info">
                                <div className="golf-pro__img">
                                    <img src={ourPro} alt="" />
                                </div>
                                <div className="golf-pro__data">
                                    <h3>Jhon Dou</h3>
                                    <p>PGA Professional</p>
                                </div>
                            </div>
                            <p className="golf-pro__desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                        <div className="golf-pro__block">
                            <div className="golf-pro__info">
                                <div className="golf-pro__img">
                                    <img src={ourPro} alt="" />
                                </div>
                                <div className="golf-pro__data">
                                    <h3>Jhon Dou</h3>
                                    <p>PGA Professional</p>
                                </div>
                            </div>
                            <p className="golf-pro__desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                        <div className="golf-pro__block">
                            <div className="golf-pro__info">
                                <div className="golf-pro__img">
                                    <img src={ourPro} alt="" />
                                </div>
                                <div className="golf-pro__data">
                                    <h3>Jhon Dou</h3>
                                    <p>PGA Professional</p>
                                </div>
                            </div>
                            <p className="golf-pro__desc">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing elit, sed do eiusmod tempor
                                incididunt ut labore et dolore magna aliqua. Ut
                                enim ad minim veniam, quis nostrud exercitation
                                ullamco laboris nisi ut aliquip ex ea commodo
                                consequat.
                            </p>
                        </div>
                    </div>
                    <Link to={"/"} className="link-1">
                        See More{" "}
                    </Link>
                </div>
            </section>
        </>
    );
};

export default Home;
