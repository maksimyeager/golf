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
                <p className="home__subtitle">welcome to golf verve</p>
                <h1 className="home__title">{t("home-banner.title")}</h1>
                <p className="home__desc">
                    We are seasoned tourism professionals with a deep passion
                    for curating exceptional golf getaways. Our expertise lies
                    in designing bespoke and distinctive golf tours to emerging
                    and captivating destinations. By integrating unique cultural
                    and tourism experiences into our golf packages, we enhance
                    each journey, creating a more enriching and memorable travel
                    experience for our clients.
                </p>
                <p className="home__desc">
                    Proposed golf destinations are meticulously selected, with
                    golf courses personally inspected and evaluated to ensure
                    the highest quality golfing experiences.
                </p>
                <div className="home__settings">
                    <Link to={"/"}>Book A Tour</Link>
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
                            <p>
                                Lorem Ipsum is simply <br /> dummy text of the.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default HomeBanner;
