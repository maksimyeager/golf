import Banner from "../components/Banner";
import bannerImg from "../assets/banner/our-pros.jpeg";
import pro from "../assets/pro.jpeg";
import { Link } from "react-router-dom";

const OurPros = () => {
    return (
        <>
            <Banner title={"Our Pros"} imageUrl={bannerImg} />
            <div className="our-pros">
                <div className="container">
                    <div className="our-pros__block">
                        <Link to={"/pro"}>
                            <div className="our-pros__image">
                                <img src={pro} alt="" />
                            </div>
                            <div className="our-pros__info">
                                <div className="our-pros__info-top">
                                    <h2>
                                        Race To Dubai Escorted Tour With PGA Pro
                                        Martyn Thompson
                                    </h2>
                                    <p>
                                        9 DAYS | 4 ROUNDS OF GOLF | FINAL 2 DAY
                                        ENTRY TO COMPETITION | PGA PRO LED GOLF
                                        The DP World Tour Championship is a
                                        prestigious golfing tournament that
                                        marks the end of the European …
                                    </p>
                                </div>
                                <div className="our-pros__info-bottom">
                                    <div className="our-pros__price-desc">
                                        per person
                                    </div>
                                    <div className="our-pros__price">£1910</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="our-pros__block">
                        <Link to={"/pro"}>
                            <div className="our-pros__image">
                                <img src={pro} alt="" />
                            </div>
                            <div className="our-pros__info">
                                <div className="our-pros__info-top">
                                    <h2>
                                        Race To Dubai Escorted Tour With PGA Pro
                                        Martyn Thompson
                                    </h2>
                                    <p>
                                        9 DAYS | 4 ROUNDS OF GOLF | FINAL 2 DAY
                                        ENTRY TO COMPETITION | PGA PRO LED GOLF
                                        The DP World Tour Championship is a
                                        prestigious golfing tournament that
                                        marks the end of the European …
                                    </p>
                                </div>
                                <div className="our-pros__info-bottom">
                                    <div className="our-pros__price-desc">
                                        per person
                                    </div>
                                    <div className="our-pros__price">£1910</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                    <div className="our-pros__block">
                        <Link to={"/pro"}>
                            <div className="our-pros__image">
                                <img src={pro} alt="" />
                            </div>
                            <div className="our-pros__info">
                                <div className="our-pros__info-top">
                                    <h2>
                                        Race To Dubai Escorted Tour With PGA Pro
                                        Martyn Thompson
                                    </h2>
                                    <p>
                                        9 DAYS | 4 ROUNDS OF GOLF | FINAL 2 DAY
                                        ENTRY TO COMPETITION | PGA PRO LED GOLF
                                        The DP World Tour Championship is a
                                        prestigious golfing tournament that
                                        marks the end of the European …
                                    </p>
                                </div>
                                <div className="our-pros__info-bottom">
                                    <div className="our-pros__price-desc">
                                        per person
                                    </div>
                                    <div className="our-pros__price">£1910</div>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </>
    );
};

export default OurPros;
