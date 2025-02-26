import { PiMapPinFill } from "react-icons/pi";
import offer1 from "../assets/offers/offer-1.jpeg";
import offer2 from "../assets/offers/offer-2.jpeg";
import offer3 from "../assets/offers/offer-3.jpeg";

const OfferPage = () => {
    return (
        <div className="offer-page">
            <div className="container">
                <div className="offer-page__wrapper">
                    <div className="offer-page__wrapper-top">
                        <div className="offer-page__img">
                            <img src={offer1} alt="" />
                        </div>
                        <div className="offer-page__images">
                            <div className="offer-page__images-block">
                                <img src={offer2} alt="" />
                            </div>
                            <div className="offer-page__images-block">
                                <img src={offer1} alt="" />
                            </div>
                            <div className="offer-page__images-block">
                                <img src={offer3} alt="" />
                            </div>
                            <div className="offer-page__images-block">
                                <p>+10 images</p>
                                <div className="offer-page__images-block--overlay"></div>
                                <img src={offer2} alt="" />
                            </div>
                        </div>
                    </div>
                    <div className="offer-page__wrapper-bottom">
                        <div className="offer-page__info">
                            <div className="offer-page__data">
                                <div className="offer-page__title">
                                    Special Offer 1
                                </div>
                                <div className="address">
                                    <PiMapPinFill size={18} />
                                    City, Address
                                </div>
                            </div>
                            <div className="price__info">
                                <div className="price__desc">From</div>
                                <div className="price">£1849</div>
                            </div>
                        </div>
                        <div className="marks">
                            <div className="mark">1 in 12 FREE</div>
                            <div className="mark">
                                20% off Drinks & Top Tracer
                            </div>
                            <div className="mark">FREE Callaway Driver</div>
                        </div>
                    </div>
                </div>
                {/* <div className="offer-page__desc">
                    <div className="offer-page__desc-block">
                        <h2>About the offer</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                        </p>
                    </div>
                    <div className="offer-page__desc-block">
                        <h2>Golf Courses</h2>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor sit amet, consectetur, adipisci
                            velit.
                        </p>
                    </div>
                    <div className="offer-page__desc-block">
                        <h2>Accommodation</h2>
                        <p>
                            Nemo enim ipsam voluptatem quia voluptas sit
                            aspernatur aut odit aut fugit, sed quia consequuntur
                            magni dolores eos qui ratione voluptatem sequi
                            nesciunt. Neque porro quisquam est, qui dolorem
                            ipsum quia dolor sit amet, consectetur, adipisci
                            velit.
                        </p>
                    </div>
                    <div className="offer-page__desc-block">
                        <h2>Restaurant & Bars</h2>
                        <p>
                            Sed ut perspiciatis unde omnis iste natus error sit
                            voluptatem accusantium doloremque laudantium, totam
                            rem aperiam, eaque ipsa quae ab illo inventore
                            veritatis et quasi architecto beatae vitae dicta
                            sunt explicabo.
                        </p>
                    </div>
                </div> */}
                <div className="offer-page__desc">
                    <p>
                        <b>The National Golf Club of Azerbaijan</b> - Where
                        nature and sport unite in perfection!
                    </p>
                    <p>
                        Nestled in the picturesque foothills of the Caucasus
                        Mountains, the National Azerbaijan Golf Club in Quba
                        offers golf travelers a unique and challenging
                        experience. As Azerbaijan's inaugural golf course, it
                        spans 75 hectares of diverse terrain, featuring
                        undulating fairways and strategically placed deep
                        bunkers that test golfers of all skill levels.
                    </p>
                    <p>
                        Designed by Jon Hunt of International Golf Design, this
                        18-hole, par-72 course harmoniously integrates with the
                        natural landscape, providing stunning mountain vistas
                        that enhance the golfing experience. The course's design
                        ensures that, despite its championship standards,
                        landing zones, approaches, and greens remain accessible,
                        offering a "look hard, play easy" feel that maximizes
                        enjoyment for all players.{" "}
                    </p>
                    <p>
                        The club's purpose-built clubhouse features luxurious
                        locker rooms, a well-stocked professional shop catering
                        to every golfer's needs, and a unique dining experience,
                        all contributing to a memorable visit.
                    </p>
                    <p>
                        For golf enthusiasts seeking a destination that combines
                        natural beauty with a challenging course, the National
                        Azerbaijan Golf Club stands out as a premier choice. Its
                        location near the Quba Palace Hotel allows travelers to
                        immerse themselves in the region's rich culture and
                        traditions, making it an ideal spot for a comprehensive
                        golf trip.
                    </p>
                </div>
            </div>
        </div>
    );
};

export default OfferPage;
