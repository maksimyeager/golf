import { useEffect } from "react";
import { IoMdClose } from "react-icons/io";
import { Link } from "react-router-dom";
import MobileLanguageSelctor from "./MobileLanguageSelector";
import { useTranslation } from "react-i18next";

// eslint-disable-next-line react/prop-types
const MobileNavbar = ({ open, onClose }) => {
    const { t } = useTranslation("global");

    const mobileNavbarLinks = [
        { name: t("mobile-navbar.about-us"), path: "/about-us" },
        { name: t("mobile-navbar.partners"), path: "/partners" },
        { name: t("mobile-navbar.mission"), path: "/mission" },
        { name: t("mobile-navbar.products"), path: "/products" },
    ];

    useEffect(() => {
        if (open) {
            document.body.classList.add("no-scroll");
        } else {
            document.body.classList.remove("no-scroll");
        }
        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [open]);

    return (
        <>
            <div
                className={`mobile-navbar--overlay ${
                    open ? "mobile-navbar--overlay--open" : ""
                }`}
            ></div>
            <div
                className={`mobile-navbar ${open ? "mobile-navbar--open" : ""}`}
            >
                <div className="mobile-navbar__close" onClick={onClose}>
                    <IoMdClose size={40} color="#f58634" />
                </div>

                <ul className="mobile-navbar__list">
                    {mobileNavbarLinks.map((link, id) => {
                        return (
                            <li key={id} className="mobile-navbar__item">
                                <Link
                                    to={link.path}
                                    className="mobile-navbar__link"
                                    onClick={() => onClose()}
                                >
                                    {link.name}
                                </Link>
                            </li>
                        );
                    })}
                </ul>
                <div className="mobile-navbar__settings">
                    <MobileLanguageSelctor />
                </div>
            </div>
        </>
    );
};

export default MobileNavbar;
