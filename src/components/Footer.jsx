import { Link } from "react-router-dom";
import logo from "../assets/logo.png";
import { FiFacebook } from "react-icons/fi";
import { FiInstagram } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import { useTranslation } from "react-i18next";
import { getDestinations } from "../services";

const Footer = () => {
    const { t } = useTranslation("global");
    const destinations = getDestinations(t);
    return (
        <footer className="footer">
            <div className="footer__top">
                <div className="container">
                    <div className="footer__info">
                        <div className="footer__logo">
                            <img src={logo} alt="" />
                        </div>
                        <div className="footer__desc">{t("footer.desc")}</div>
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
                        <h2 className="footer__menu-title">
                            {t("footer.our-links")}
                        </h2>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <Link to={"/destinations"}>
                                    {t("footer.explore-destinations")}
                                </Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={"/offers"}>
                                    {t("footer.special-offers")}
                                </Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={"/tournaments"}>
                                    {t("footer.tournaments")}
                                </Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={"/our-pros"}>
                                    {t("footer.meet-our-pros")}
                                </Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={"/blog"}>{t("footer.blog")}</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__menu">
                        <h2 className="footer__menu-title">
                            {t("footer.tours")}
                        </h2>
                        <ul className="footer__list">
                            <li className="footer__list-item">
                                <Link to={"/tour"}>
                                    {t("footer.golf-tours")}
                                </Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={"/customize-tours"}>
                                    {t("footer.customize-tours")}
                                </Link>
                            </li>
                            <li className="footer__list-item">
                                <Link to={"/group-tours"}>
                                    {t("footer.group-tours")}
                                </Link>
                            </li>
                        </ul>
                    </div>
                    <div className="footer__menu">
                        <h2 className="footer__menu-title">
                            {t("footer.top-destinations")}
                        </h2>
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
