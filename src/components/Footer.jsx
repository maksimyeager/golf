import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { destinations } from "../services";

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__info">
                        <div className="footer__logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="footer__desc">
                            A leading golf travel agency specializing in unique
                            and emerging golf destinations around the world
                        </div>
                        <div className="footer__socials">
                            <div className="footer__social-block footer__social-block--facebook">
                                <FiFacebook size={26} />
                            </div>
                            <div className="footer__social-block footer__social-block--instagram">
                                <FiInstagram size={24} />
                            </div>
                            <div className="footer__social-block footer__social-block--x">
                                <FaLinkedinIn size={22} />
                            </div>
                        </div>
                    </div>
                    <div className="footer__menu">
                        <h2 className="footer__menu-title">Our Links</h2>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <Link to={"/destinations"}>
                                    Explore Destinations
                                </Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={"/offers"}>Special Offers</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={"/tournaments"}>Tournaments</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={"/our-pros"}>Meet Our Pros</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={"/blog"}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__menu">
                        <h2 className="footer__menu-title">Tours</h2>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <Link to={"/tour"}>Golf Tours</Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={"/customize-tours"}>
                                    Customize Tours
                                </Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={"/group-tours"}>Group Tours</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__menu">
                        <h2 className="footer__menu-title">Top Destinations</h2>
                        <ul className="footer__list">
                            {destinations.map((item) => (
                                <li
                                    className="footer__list-item"
                                    key={item.path}
                                >
                                    <Link to={`/destination/${item.path}`}>
                                        {item.name}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
            <div className="footer__bottom">
                <div className="copyright">
                    Copyright © 2025 GolfVerve by{" "}
                    <a href="https://moderndigital.az/" target="_blank">
                        Modern Digital
                    </a>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
