import { Link } from "react-router-dom";
import earthSvg from "../assets/icons/earth.svg";
import travelSvg from "../assets/icons/travel.svg";
import serviceSvg from "../assets/icons/service.svg";
import image from "../assets/image.png";
import image1 from "../assets/image-1.jpeg";
import image2 from "../assets/image-2.jpeg";
import { HiMapPin } from "react-icons/hi2";
import { FaChevronLeft } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { FaPlay } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";

const Home = () => {
    return (
        <>
            <div className="main-banner">
                <div className="home-banner">
                    <div className="container">
                        <p className="home__subtitle">welcome to golf verve</p>
                        <h1 className="home__title">
                            Welcome to the Ultimate Haven for Golf Enthusiasts!
                        </h1>
                        <p className="home__desc">
                            We are seasoned tourism professionals with a deep
                            passion for curating exceptional golf getaways. Our
                            expertise lies in designing bespoke and distinctive
                            golf tours to emerging and captivating destinations.
                            By integrating unique cultural and tourism
                            experiences into our golf packages, we enhance each
                            journey, creating a more enriching and memorable
                            travel experience for our clients.
                        </p>
                        <p className="home__desc">
                            Proposed golf destinations are meticulously
                            selected, with golf courses personally inspected and
                            evaluated to ensure the highest quality golfing
                            experiences.
                        </p>
                        <div className="home__settings">
                            <Link to={"/"}>Book A Tour</Link>
                        </div>
                    </div>
                </div>
            </div>
            <section className="section section--subscribe">
                <div className="container">
                    <div className="subscribe__wrapper">
                        <div className="subscribe__info">
                            <h2 className="subscribe__title">Subscribe</h2>
                            <p className="subscribe__subtitle">
                                Lorem ipsum dolor sit amet, consectetur
                                adipiscing <br /> elit, sed do eiusmod tempor
                                incididunt ut.
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
                            <h2 className="section__title">Special Offers</h2>
                            <p className="section__subtitle">
                                Lorem ipsum dolor sit amet
                            </p>
                        </div>
                        <div className="offers__head-col">
                            <Link to={"/"} className="link-1">
                                See More
                            </Link>
                        </div>
                    </div>
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
            <section className="section section--destinations">
                <div className="container">
                    <h2 className="section__title">Top Destinations</h2>
                    <p className="section__subtitle">
                        Lorem ipsum dolor sit amet
                    </p>
                    <div className="destinations__wrapper">
                        <Link>
                            <div className="destinations__block">
                                <div className="destinations__img">
                                    <img src={image2} alt="" />
                                    <div className="destinations__img--overlay"></div>
                                </div>
                                <div className="destinations__title">
                                    Azərbaycan
                                </div>
                                <Link to={"/"} className="destinations__link">
                                    View Destination
                                </Link>
                            </div>
                        </Link>
                        <Link>
                            <div className="destinations__block">
                                <div className="destinations__img">
                                    <img src={image2} alt="" />
                                    <div className="destinations__img--overlay"></div>
                                </div>
                                <div className="destinations__title">
                                    Georgia
                                </div>
                                <Link to={"/"} className="destinations__link">
                                    View Destination
                                </Link>
                            </div>
                        </Link>
                        <Link>
                            <div className="destinations__block">
                                <div className="destinations__img">
                                    <img src={image2} alt="" />
                                    <div className="destinations__img--overlay"></div>
                                </div>
                                <div className="destinations__title">
                                    Russia
                                </div>
                                <Link to={"/"} className="destinations__link">
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
                                    <img src={image} alt="" />
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
                                    <img src={image} alt="" />
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
                                    <img src={image} alt="" />
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
