import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import logo from "../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
import golfBall from "../assets/golf-ball.png";
import { Menu } from "lucide-react";
import MobileNavbar from "./MobileNavbar";

const Header = () => {
    const [open, setOpen] = useState(false);
    const [openDeopdown, setOpenDeopdown] = useState(false);
    const [openDeopdown1, setOpenDeopdown1] = useState(false);
    const handleClose = () => {
        setOpen(false);
        document.body.classList.add("no-scroll");
    };
    return (
        <>
            <header className="header">
                <div className="container">
                    <Link to={"/"}>
                        <div className="header__logo">
                            <img src={logo} alt="GolfVerve" />
                        </div>
                    </Link>
                    <div className="header__menu">
                        <ul className="header__list">
                            <li
                                onMouseEnter={() => setOpenDeopdown(true)}
                                onMouseLeave={() => setOpenDeopdown(false)}
                            >
                                <Link
                                    to={"/destinations"}
                                    className="toggle-link"
                                >
                                    Destinations{" "}
                                    <FaChevronDown
                                        size={14}
                                        className={
                                            openDeopdown && "toggle-active"
                                        }
                                    />
                                </Link>
                                {openDeopdown && (
                                    <div className="dropdown dropdown--1">
                                        <img
                                            src={golfBall}
                                            alt="Golf Ball"
                                            className="golf-ball"
                                        />
                                        <div className="dropdown__wrapper">
                                            <div className="dropdown__block">
                                                <ul className="dropdown__list">
                                                    <li>
                                                        <Link
                                                            to={
                                                                "/destination/azerbaijan"
                                                            }
                                                        >
                                                            Azerbaijan
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={
                                                                "/destination/georgia"
                                                            }
                                                        >
                                                            Georgia
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={
                                                                "/destination/russia"
                                                            }
                                                        >
                                                            Russia
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={
                                                                "/destination/kazakhstan"
                                                            }
                                                        >
                                                            Kazakhstan
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={
                                                                "/destination/uae"
                                                            }
                                                        >
                                                            UAE
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link
                                                            to={
                                                                "/destination/qatar"
                                                            }
                                                        >
                                                            Qatar
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>
                            <li
                                onMouseEnter={() => setOpenDeopdown1(true)}
                                onMouseLeave={() => setOpenDeopdown1(false)}
                            >
                                <Link to={"#"} className="toggle-link">
                                    Tours{" "}
                                    <FaChevronDown
                                        size={14}
                                        className={
                                            openDeopdown1 && "toggle-active"
                                        }
                                    />
                                </Link>
                                {openDeopdown1 && (
                                    <div className="dropdown dropdown--2">
                                        <img
                                            src={golfBall}
                                            alt="Golf Ball"
                                            className="golf-ball"
                                        />

                                        <div className="dropdown__wrapper">
                                            <div className="dropdown__block">
                                                <div className="dropdown__block-title">
                                                    Tour Types
                                                </div>
                                                <ul className="dropdown__list">
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            Golf & Beach Tours
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            Golf & Cultural
                                                            Tours
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            Golf & Gourmet Tours
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            Golf Lakes &
                                                            Mountain Tours
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            Golf & Safari Tours
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            Golf & Tuition
                                                            Breaks
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dropdown__block">
                                                <div className="dropdown__block-title">
                                                    Tours by Month
                                                </div>
                                                <ul className="dropdown__list">
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            January
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            February
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            March
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            April
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            May
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            June
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dropdown__block">
                                                <div className="dropdown__block-title"></div>
                                                <ul className="dropdown__list dropdown__list--untitled">
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            July
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            August
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            September
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            October
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            November
                                                        </Link>
                                                    </li>
                                                    <li>
                                                        <Link to={"/tour"}>
                                                            December
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className="dropdown__block">
                                                <Link
                                                    to={"/customize-tours"}
                                                    className="customize"
                                                >
                                                    <FaChevronRight color="#12AE65" />
                                                    <span>Customize Tours</span>
                                                </Link>
                                                <Link
                                                    to={"/group-tours"}
                                                    className="customize"
                                                >
                                                    <FaChevronRight color="#12AE65" />
                                                    <span>Group Tours</span>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>
                                )}
                            </li>

                            <li>
                                <Link to={"/offers"}>Offers</Link>
                            </li>
                            <li>
                                <Link to={"/our-pros"}>Our Pros </Link>
                            </li>
                            <li>
                                <Link to={"/blog"}>Blog</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header__actions">
                        <LanguageSelector />
                        <button
                            className="header__btn"
                            onClick={() => setOpen(true)}
                        >
                            <Menu size={40} color="#F58634" />
                        </button>
                    </div>
                </div>
            </header>
            <MobileNavbar open={open} onClose={handleClose} />
        </>
    );
};
export default Header;
