import { Link } from "react-router-dom";
import { FiArrowRight } from "react-icons/fi";
import learnMoreAboutImg1 from "../assets/home-banner/learn-more-about-1.png";
import learnMoreAboutImg2 from "../assets/home-banner/learn-more-about-2.png";
import learnMoreAboutImg3 from "../assets/home-banner/learn-more-about-3.png";
import { useTranslation } from "react-i18next";

const HomeBanner = () => {
    const { t } = useTranslation("global");

    return (
        <div className="home-banner">
            <div className="home-banner--overlay"></div>
            <div className="container">
                <p className="home__subtitle">{t("home-banner.subtitle")}</p>
                <h1 className="home__title">{t("home-banner.title")}</h1>
                <p className="home__desc">{t("home-banner.desc-1")}</p>
                {/* <p className="home__desc">{t("home-banner.desc-2")}</p> */}
                <div className="home__settings">
                    <Link to={"/"}>{t("home-banner.button")}</Link>
                </div>
                <div className="learn-more-about">
                    <div className="learn-more-about__block learn-more-about__block--1">
                        <div className="learn-more-about__rounded"></div>
                        <div className="learn-more-about__title">
                            <Link to={"/"}>
                                Learn more about <FiArrowRight size={36} />
                            </Link>
                        </div>
                    </div>
                    <div className="learn-more-about__block learn-more-about__block--2">
                        <div className="learn-more-about__images">
                            <img
                                src={learnMoreAboutImg1}
                                alt=""
                                className="learn-more-about__img learn-more-about__img--1"
                            />
                            <img
                                src={learnMoreAboutImg2}
                                alt=""
                                className="learn-more-about__img learn-more-about__img--2"
                            />
                            <img
                                src={learnMoreAboutImg3}
                                alt=""
                                className="learn-more-about__img learn-more-about__img--3"
                            />
                        </div>
                        <div className="learn-more-about__desc">
                            <h3>Best Of Our Offers</h3>
                            <p>Discover our exclusive selections</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
