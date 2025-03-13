import { Link } from "react-router-dom";
import earthSvg from "../assets/icons/earth.svg";
import travelSvg from "../assets/icons/travel.svg";
import serviceSvg from "../assets/icons/service.svg";
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
import MeetOurPros from "../components/MeetOurPros";
import { useTranslation } from "react-i18next";

const Home = () => {
    const { t } = useTranslation("global");
    const { offers, loading } = useGetOffers();

    return (
        <>
            <div className="main-banner">
                <HomeBanner />
            </div>
            <section className="section section--subscribe">
                <div className="container">
                    <div className="subscribe__wrapper">
                        <div className="subscribe__info">
                            <h2 className="subscribe__title">
                                {t("home-page.subscribe")}
                            </h2>
                            <p
                                className="subscribe__subtitle"
                                style={{ maxWidth: "560px" }}
                            >
                                {t("home-page.subscribe-desc-1")}
                                <br />
                                {t("home-page.subscribe-desc-2")}
                            </p>
                            <form action="" className="subscribe__form">
                                <input
                                    type="text"
                                    placeholder={t("home-page.subscribe-input")}
                                    required
                                />
                                <button>
                                    {t("home-page.subscribe-button")}
                                </button>
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
                                    {t("home-page.subscribe-contact-us")}
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
                                {t("home-page.offers")}
                            </h2>
                            <p
                                className="section__subtitle"
                                style={{ maxWidth: "530px" }}
                            >
                                {t("home-page.offers-desc")}
                            </p>
                        </div>
                        <div className="offers__head-col">
                            <Link to={"/"} className="link-1">
                                {t("see-more")}
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
                        {t("home-page.destinations")}
                    </h2>
                    <p
                        className="section__subtitle"
                        style={{ maxWidth: "580px" }}
                    >
                        {t("home-page.destinations-desc")}
                    </p>
                    <div className="destinations__wrapper">
                        <Link to={"/destination/azerbaijan"}>
                            <div className="destinations__block">
                                <div className="destinations__img">
                                    <img src={destination1} alt="" />
                                    <div className="destinations__img--overlay"></div>
                                </div>
                                <div className="destinations__title">
                                    {t("destinations.azerbaijan")}
                                </div>
                                <Link
                                    to={"/destination/azerbaijan"}
                                    className="destinations__link"
                                >
                                    {t("home-page.view-destination")}
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
                                    {t("destinations.georgia")}
                                </div>
                                <Link
                                    to={"/destination/georgia"}
                                    className="destinations__link"
                                >
                                    {t("home-page.view-destination")}
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
                                    {t("destinations.russia")}
                                </div>
                                <Link
                                    to={"/destination/russia"}
                                    className="destinations__link"
                                >
                                    {t("home-page.view-destination")}
                                </Link>
                            </div>
                        </Link>
                    </div>
                    <div className="destinations__settings">
                        <button>
                            <FaChevronLeft color={"#fff"} size={20} />
                        </button>
                        <Link to={"/destinations"}>
                            {t("home-page.view-all-destination")}
                        </Link>
                        <button>
                            <FaChevronRight color={"#fff"} size={20} />
                        </button>
                    </div>
                </div>
            </section>
            <section className="section section--why">
                <div className="container">
                    <h2 className="section__title">{t("home-page.why")}</h2>
                    <p
                        className="section__subtitle"
                        style={{ maxWidth: "580px" }}
                    >
                        {t("home-page.why-desc")}
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
            <MeetOurPros />
        </>
    );
};

export default Home;
