import { Link } from "react-router-dom";
import LanguageSelector from "./LanguageSelector";
import logo from "../assets/logo.png";
import { FaChevronDown } from "react-icons/fa";
import { FaChevronRight } from "react-icons/fa";
import { useState } from "react";
const Header = () => {
    const [open, setOpen] = useState(false);
    const [open1, setOpen1] = useState(false);
    const [open2, setOpen2] = useState(false);
    return (
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
                            onMouseEnter={() => setOpen(true)}
                            onMouseLeave={() => setOpen(false)}
                        >
                            <Link to={"/destinations"} className="toggle-link">
                                Destinations <FaChevronDown size={14} />
                            </Link>
                            {open && (
                                <div className="dropdown dropdown--1">
                                    <div className="dropdown__wrapper">
                                        <div className="dropdown__block">
                                            <div className="dropdown__block-title">
                                                Europe
                                            </div>
                                            <ul className="dropdown__list">
                                                <li>
                                                    <Link to={"/tour"}>Cyprus</Link>
                                                </li>
                                                <li>
                                                    <Link>Czech Republic</Link>
                                                </li>
                                                <li>
                                                    <Link>France</Link>
                                                </li>
                                                <li>
                                                    <Link>Greece</Link>
                                                </li>
                                                <li>
                                                    <Link>Italy</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown__block">
                                            <div className="dropdown__block-title">
                                                North & South America
                                            </div>
                                            <ul className="dropdown__list">
                                                <li>
                                                    <Link>Cyprus</Link>
                                                </li>
                                                <li>
                                                    <Link>Czech Republic</Link>
                                                </li>
                                                <li>
                                                    <Link>France</Link>
                                                </li>
                                                <li>
                                                    <Link>Greece</Link>
                                                </li>
                                                <li>
                                                    <Link>Italy</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown__block">
                                            <div className="dropdown__block-title">
                                                Europe
                                            </div>
                                            <ul className="dropdown__list">
                                                <li>
                                                    <Link>Cyprus</Link>
                                                </li>
                                                <li>
                                                    <Link>Czech Republic</Link>
                                                </li>
                                                <li>
                                                    <Link>France</Link>
                                                </li>
                                                <li>
                                                    <Link>Greece</Link>
                                                </li>
                                                <li>
                                                    <Link>Italy</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown__block">
                                            <div className="dropdown__block-title">
                                                Europe
                                            </div>
                                            <ul className="dropdown__list">
                                                <li>
                                                    <Link>Cyprus</Link>
                                                </li>
                                                <li>
                                                    <Link>Czech Republic</Link>
                                                </li>
                                                <li>
                                                    <Link>France</Link>
                                                </li>
                                                <li>
                                                    <Link>Greece</Link>
                                                </li>
                                                <li>
                                                    <Link>Italy</Link>
                                                </li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => setOpen1(true)}
                            onMouseLeave={() => setOpen1(false)}
                        >
                            <Link to={"#"} className="toggle-link">
                                Tours <FaChevronDown size={14} />
                            </Link>
                            {open1 && (
                                <div className="dropdown dropdown--2">
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
                                                        Golf & Cultural Tours
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>
                                                        Golf & Gourmet Tours
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>
                                                        Golf Lakes & Mountain
                                                        Tours
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>
                                                        Golf & Safari Tours
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>
                                                        Golf & Tuition Breaks
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
                                                    <Link to={"/tour"}>January</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>February</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>March</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>April</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>May</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>June</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown__block">
                                            <div className="dropdown__block-title"></div>
                                            <ul className="dropdown__list">
                                                <li>
                                                    <Link to={"/tour"}>July</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>August</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>September</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>October</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>November</Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tour"}>December</Link>
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="dropdown__block">
                                            <Link to={"/customize-tours"} className="customize">
                                                <FaChevronRight color="#12AE65" />
                                                <span>Customize Tours</span>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </li>
                        <li
                            onMouseEnter={() => setOpen2(true)}
                            onMouseLeave={() => setOpen2(false)}
                        >
                            <Link to={"/tournaments"} className="toggle-link">
                                Tournaments <FaChevronDown size={14} />
                            </Link>
                            {open2 && (
                                <div className="dropdown dropdown--3">
                                    <div className="dropdown__wrapper">
                                        <div className="dropdown__block">
                                            <ul className="dropdown__list">
                                                <li>
                                                    <Link to={"/tournaments"}>
                                                        Amateur Cup
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tournaments"}>
                                                        Amateur Cup 2
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link to={"/tournaments"}>
                                                        Amateur Cup 3
                                                    </Link>
                                                </li>
                                            </ul>
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
                </div>
            </div>
        </header>
    );
};
export default Header;
