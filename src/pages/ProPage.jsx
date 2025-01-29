import aa from "../assets/aa.jpeg";
import { FaCalendar } from "react-icons/fa";
import { PiMapPinFill } from "react-icons/pi";

const ProPage = () => {
    return (
        <div className="pro-page">
            <div className="container">
                <div className="pro-page__wrapper">
                    <div className="pro-page__image">
                        <img src={aa} alt="" />
                    </div>
                    <div className="pro-page__info">
                        <h2 className="pro-page__title">
                            Race To Dubai Escorted Tour With PGA Pro Martyn
                            Thompson
                        </h2>
                        <div className="marks">
                            <div className="mark">1 in 12 FREE</div>
                            <div className="mark">
                                20% off Drinks & Top Tracer
                            </div>
                            <div className="mark">FREE Callaway Driver</div>
                        </div>
                        <div className="pro-page__data">
                            <p className="data">
                                <FaCalendar /> <span>Thur 17 Nov 2022</span>
                            </p>
                            <div className="address">
                                <PiMapPinFill size={18} />
                                City, Address
                            </div>
                        </div>
                        <div className="pro-page__info-bottom">
                            <div className="our-pros__price-desc">
                                per person
                            </div>
                            <div className="our-pros__price">£1910</div>
                        </div>
                    </div>
                </div>
                <div className="pro-page__desc">
                    <p>
                        The DP World Tour Championship is a prestigious golfing
                        tournament that marks the end of the European Tour’s
                        Race to Dubai.
                    </p>

                    <p>
                        It invites the European Tour’s leading 60 players to
                        take to the greens for a highly competitive tournament,
                        sporting a hefty prize fund of USD $9,000,000! This
                        five-star sporting event is the highlight of Dubai’s
                        golf calendar and has been awarded the highest possible
                        commendation in line with the prestigious Dubai World
                        Cup.
                    </p>
                    <p>
                        The competition makes for an exciting week for both
                        players and visitors alike. Set in the scenic Jumeirah
                        Golf Estates and played on their Earth Course, the DP
                        World Tour Championship makes the most of Dubai’s
                        fabulous winter weather.
                    </p>

                    <p>
                        This is a fabulous chance to walk with some of the world
                        best golfers, play some of Dubai’s premier golf courses
                        and stay right in the heart of Dubai Marina with its
                        bright city lights, nightlife and action-packed social
                        scene.
                    </p>
                </div>
            </div>
        </div>
    );
};
export default ProPage;
